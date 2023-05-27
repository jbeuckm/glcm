// @ts-nocheck

// import * as twgl from 'twgl.js'
import { getWindows } from './getWindows.js'

import neighborVS from './shaders/neighbor_vertex.js'
import neighborFS from './shaders/neighbor_fragment.js'
import glcmVS from './shaders/glcm_vertex.js'
import glcmFS from './shaders/glcm_fragment.js'
import statsVS from './shaders/stats_vertex.js'
import correlationFS from './shaders/correlation_fragment.js'
import dissimilarityFS from './shaders/dissimilarity_fragment.js'
import homogeneityFS from './shaders/homogeneity_fragment.js'
import asmFS from './shaders/ASM_fragment.js'
import entropyFS from './shaders/entropy_fragment.js'
import displayVS from './shaders/display_vertex.js'
import displayFS from './shaders/display_fragment.js'

const DEFAULT_LEVELS = 16

export class GLCM {
  static withOffscreenSize(width, height) {
    const canvas = new OffscreenCanvas(width, height)
    return new GLCM(canvas)
  }

  constructor(canvas) {
    this.canvas = canvas

    const gl = this.canvas.getContext('webgl')

    var ext = gl.getExtension('OES_texture_float')
    if (!ext) {
      throw 'requires OES_texture_float'
    }

    this.gl = gl
  }

  async init({ levels } = { levels: DEFAULT_LEVELS }) {
    const { gl } = this

    this.levels = levels

    this.quadBufferInfo = twgl.primitives.createXYQuadBufferInfo(gl)

    this.neighborProgramInfo = twgl.createProgramInfo(gl, [neighborVS(), neighborFS()])
    this.glcmProgramInfo = twgl.createProgramInfo(gl, [glcmVS({ levels }), glcmFS()])

    this.correlationProgramInfo = twgl.createProgramInfo(gl, [statsVS(), correlationFS({ levels })])
    this.dissimilarityProgramInfo = twgl.createProgramInfo(gl, [
      statsVS(),
      dissimilarityFS({ levels }),
    ])
    this.homogeneityProgramInfo = twgl.createProgramInfo(gl, [statsVS(), homogeneityFS({ levels })])
    this.asmProgramInfo = twgl.createProgramInfo(gl, [statsVS(), asmFS({ levels })])

    this.displayProgramInfo = twgl.createProgramInfo(gl, [displayVS(), displayFS()])
  }

  loadImage(src) {
    const gl = this.gl

    return new Promise((resolve, reject) => {
      twgl.createTexture(
        gl,
        {
          src,
          min: gl.NEAREST,
          mag: gl.NEAREST,
          wrap: gl.CLAMP_TO_EDGE,
          crossOrigin: '',
        },
        (err, texture, image) => {
          if (err) return reject(err)

          this.texture = texture
          this.image = image

          this.width = image.width
          this.height = image.height

          resolve({ image, texture })
        }
      )
    })
  }

  findNeighbors({ angle, distance }, renderToCanvas = false) {
    const { gl, width, height, quadBufferInfo } = this

    gl.useProgram(this.neighborProgramInfo.program)

    twgl.setBuffersAndAttributes(gl, this.neighborProgramInfo, quadBufferInfo)

    // image to hold the result of the neighbors program
    var neighborsFbi = renderToCanvas
      ? null
      : twgl.createFramebufferInfo(
          gl,
          [
            {
              type: gl.FLOAT,
              min: gl.NEAREST,
              mag: gl.NEAREST,
              wrap: gl.CLAMP_TO_EDGE,
            },
          ],
          width,
          height
        )
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      alert("can't render to floating point texture")
    }

    twgl.setUniforms(this.neighborProgramInfo, {
      u_angle: angle,
      u_distance: distance,
      u_textureSize: [width, height],
      u_texture: this.texture,
    })

    twgl.bindFramebufferInfo(gl, neighborsFbi)

    twgl.drawBufferInfo(gl, gl.TRIANGLES, quadBufferInfo)

    return neighborsFbi
  }

  buildMatrices(neighborsFbi, { reach, step }, renderToCanvas = false) {
    const { gl, width, height, glcmProgramInfo, levels } = this

    // for each window, find the texture offset and glcm offset
    const { xSize, ySize, locations } = getWindows({
      width,
      height,
      reach,
      step,
      levels,
    })
    this.xSize = xSize
    this.ySize = ySize
    this.locations = locations

    // source pixels for one window
    const windowSize = 2 * reach + 1
    this.windowSize = windowSize
    const textureWindow = []
    for (let y = 0; y < windowSize; y++) {
      for (let x = 0; x < windowSize; x++) {
        textureWindow.push([x, y])
      }
    }
    var texturePositionsBufferInfo = twgl.createBufferInfoFromArrays(gl, {
      texturePosition: { numComponents: 2, data: textureWindow.flat() },
    })

    gl.blendFunc(gl.ONE, gl.ONE)
    gl.enable(gl.BLEND)
    gl.useProgram(glcmProgramInfo.program)

    twgl.setBuffersAndAttributes(gl, glcmProgramInfo, texturePositionsBufferInfo)

    // create an image to store GLCM matrices
    var glcmFbi = renderToCanvas
      ? null
      : twgl.createFramebufferInfo(
          gl,
          [
            {
              type: gl.FLOAT,
              min: gl.NEAREST,
              mag: gl.NEAREST,
              wrap: gl.CLAMP_TO_EDGE,
            },
          ],
          xSize * levels,
          ySize * levels
        )
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      alert("can't render to floating point texture")
    }

    twgl.bindFramebufferInfo(gl, glcmFbi)

    // count pixel differences to build GLCMs
    locations.forEach(({ textureOffset, glcmOffset }) => {
      twgl.setUniforms(glcmProgramInfo, {
        u_texture: neighborsFbi.attachments[0],
        u_textureSize: [neighborsFbi.width, neighborsFbi.height],
        u_textureOffset: textureOffset,
        u_glcmOffset: glcmOffset,
        u_glcmSize: [xSize * levels, ySize * levels],
        u_pixelsInWindow: windowSize * windowSize,
      })
      twgl.drawBufferInfo(gl, gl.POINTS, texturePositionsBufferInfo)
    })
    gl.blendFunc(gl.ONE, gl.ZERO)
    gl.disable(gl.BLEND)

    return glcmFbi
  }

  runStats(glcmFbi, statsProgramInfo, renderToCanvas = false) {
    const { gl, xSize, ySize, levels, locations, windowSize } = this

    var statsPointsBi = twgl.createBufferInfoFromArrays(gl, {
      glcmOffset: {
        numComponents: 2,
        data: locations.map(l => l.glcmOffset).flat(),
      },
    })

    gl.useProgram(statsProgramInfo.program)
    twgl.setBuffersAndAttributes(gl, statsProgramInfo, statsPointsBi)

    var statsFbi = renderToCanvas
      ? null
      : twgl.createFramebufferInfo(
          gl,
          [
            {
              type: gl.FLOAT,
              min: gl.NEAREST,
              mag: gl.NEAREST,
              wrap: gl.CLAMP_TO_EDGE,
            },
          ],
          xSize,
          ySize
        )
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      alert("can't render to floating point texture")
    }

    twgl.bindFramebufferInfo(gl, statsFbi)

    twgl.setUniforms(statsProgramInfo, {
      u_texture: glcmFbi.attachments[0],
      u_glcmSize: [xSize * levels, ySize * levels],
    })

    twgl.drawBufferInfo(gl, gl.POINTS, statsPointsBi)

    return statsFbi
  }

  correlation(glcmFbi, renderToCanvas = false) {
    return this.runStats(glcmFbi, this.correlationProgramInfo, renderToCanvas)
  }
  dissimilarity(glcmFbi, renderToCanvas = false) {
    return this.runStats(glcmFbi, this.dissimilarityProgramInfo, renderToCanvas)
  }
  homogeneity(glcmFbi, renderToCanvas = false) {
    return this.runStats(glcmFbi, this.homogeneityProgramInfo, renderToCanvas)
  }
  asm(glcmFbi, renderToCanvas = false) {
    return this.runStats(glcmFbi, this.asmProgramInfo, renderToCanvas)
  }
  entropy(glcmFbi, renderToCanvas = false) {
    return this.runStats(glcmFbi, this.entropyProgramInfo, renderToCanvas)
  }

  display(resultFbi) {
    const { gl, quadBufferInfo, displayProgramInfo, xSize, ySize } = this

    gl.useProgram(displayProgramInfo.program)

    twgl.setBuffersAndAttributes(gl, displayProgramInfo, quadBufferInfo)

    twgl.bindFramebufferInfo(gl, null)

    twgl.setUniforms(displayProgramInfo, {
      u_texture: resultFbi.attachments[0],
      u_textureSize: [xSize, ySize],
    })

    twgl.drawBufferInfo(gl, gl.TRIANGLES, quadBufferInfo)
  }

  getImageBitmap() {
    return this.canvas.transferToImageBitmap()
  }
}
