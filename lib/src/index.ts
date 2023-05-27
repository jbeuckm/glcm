// @ts-nocheck

// import * as twgl from 'twgl.js'
import { getWindows } from './getWindows.js'

import nvs from './shaders/neighbor_vertex.js'
import nfs from './shaders/neighbor_fragment.js'
import gvs from './shaders/glcm_vertex.js'
import gfs from './shaders/glcm_fragment.js'
import cvs from './shaders/correlation_vertex.js'
import cfs from './shaders/correlation_fragment.js'
import dvs from './shaders/display_vertex.js'
import dfs from './shaders/display_fragment.js'

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

    this.neighborProgramInfo = twgl.createProgramInfo(gl, [nvs(), nfs()])
    this.glcmProgramInfo = twgl.createProgramInfo(gl, [gvs({ levels }), gfs()])
    this.correlationProgramInfo = twgl.createProgramInfo(gl, [cvs(), cfs({ levels })])
    this.displayProgramInfo = twgl.createProgramInfo(gl, [dvs(), dfs()])
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

  correlation(glcmFbi, renderToCanvas = false) {
    const { gl, xSize, ySize, levels, locations, correlationProgramInfo, windowSize } = this

    var correlationPointsBi = twgl.createBufferInfoFromArrays(gl, {
      glcmOffset: {
        numComponents: 2,
        data: locations.map(l => l.glcmOffset).flat(),
      },
    })

    gl.useProgram(correlationProgramInfo.program)
    twgl.setBuffersAndAttributes(gl, correlationProgramInfo, correlationPointsBi)

    var correlationFbi = renderToCanvas
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

    twgl.bindFramebufferInfo(gl, correlationFbi)

    twgl.setUniforms(correlationProgramInfo, {
      u_texture: glcmFbi.attachments[0],
      u_glcmSize: [xSize * levels, ySize * levels],
    })

    twgl.drawBufferInfo(gl, gl.POINTS, correlationPointsBi)

    return correlationFbi
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
