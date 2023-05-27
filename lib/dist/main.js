/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GLCM"] = factory();
	else
		root["GLCM"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GLCM: () => (/* binding */ GLCM)\n/* harmony export */ });\n/* harmony import */ var _getWindows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindows.js */ \"./src/getWindows.js\");\n/* harmony import */ var _shaders_neighbor_vertex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/neighbor_vertex.js */ \"./src/shaders/neighbor_vertex.js\");\n/* harmony import */ var _shaders_neighbor_fragment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/neighbor_fragment.js */ \"./src/shaders/neighbor_fragment.js\");\n/* harmony import */ var _shaders_glcm_vertex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/glcm_vertex.js */ \"./src/shaders/glcm_vertex.js\");\n/* harmony import */ var _shaders_glcm_fragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/glcm_fragment.js */ \"./src/shaders/glcm_fragment.js\");\n/* harmony import */ var _shaders_stats_vertex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/stats_vertex.js */ \"./src/shaders/stats_vertex.js\");\n/* harmony import */ var _shaders_correlation_fragment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/correlation_fragment.js */ \"./src/shaders/correlation_fragment.js\");\n/* harmony import */ var _shaders_dissimilarity_fragment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shaders/dissimilarity_fragment.js */ \"./src/shaders/dissimilarity_fragment.js\");\n/* harmony import */ var _shaders_homogeneity_fragment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/homogeneity_fragment.js */ \"./src/shaders/homogeneity_fragment.js\");\n/* harmony import */ var _shaders_ASM_fragment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/ASM_fragment.js */ \"./src/shaders/ASM_fragment.js\");\n/* harmony import */ var _shaders_entropy_fragment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shaders/entropy_fragment.js */ \"./src/shaders/entropy_fragment.js\");\n/* harmony import */ var _shaders_display_vertex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shaders/display_vertex.js */ \"./src/shaders/display_vertex.js\");\n/* harmony import */ var _shaders_display_fragment_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shaders/display_fragment.js */ \"./src/shaders/display_fragment.js\");\n// @ts-nocheck\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n// import * as twgl from 'twgl.js'\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar DEFAULT_LEVELS = 16;\nvar GLCM = /** @class */ (function () {\n    function GLCM(canvas) {\n        this.canvas = canvas;\n        var gl = this.canvas.getContext('webgl');\n        var ext = gl.getExtension('OES_texture_float');\n        if (!ext) {\n            throw 'requires OES_texture_float';\n        }\n        this.gl = gl;\n    }\n    GLCM.withOffscreenSize = function (width, height) {\n        var canvas = new OffscreenCanvas(width, height);\n        return new GLCM(canvas);\n    };\n    GLCM.prototype.init = function (_a) {\n        var _b = _a === void 0 ? { levels: DEFAULT_LEVELS } : _a, levels = _b.levels;\n        return __awaiter(this, void 0, void 0, function () {\n            var gl;\n            return __generator(this, function (_c) {\n                gl = this.gl;\n                this.levels = levels;\n                this.quadBufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);\n                this.neighborProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_neighbor_vertex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_shaders_neighbor_fragment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()]);\n                this.glcmProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_glcm_vertex_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ levels: levels }), (0,_shaders_glcm_fragment_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()]);\n                this.correlationProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_stats_vertex_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), (0,_shaders_correlation_fragment_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ levels: levels })]);\n                this.dissimilarityProgramInfo = twgl.createProgramInfo(gl, [\n                    (0,_shaders_stats_vertex_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n                    (0,_shaders_dissimilarity_fragment_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ levels: levels }),\n                ]);\n                this.homogeneityProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_stats_vertex_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), (0,_shaders_homogeneity_fragment_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ levels: levels })]);\n                this.asmProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_stats_vertex_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), (0,_shaders_ASM_fragment_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({ levels: levels })]);\n                this.entropyProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_stats_vertex_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), (0,_shaders_entropy_fragment_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({ levels: levels })]);\n                this.displayProgramInfo = twgl.createProgramInfo(gl, [(0,_shaders_display_vertex_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(), (0,_shaders_display_fragment_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])()]);\n                return [2 /*return*/];\n            });\n        });\n    };\n    GLCM.prototype.loadImage = function (src) {\n        var _this = this;\n        var gl = this.gl;\n        return new Promise(function (resolve, reject) {\n            twgl.createTexture(gl, {\n                src: src,\n                min: gl.NEAREST,\n                mag: gl.NEAREST,\n                wrap: gl.CLAMP_TO_EDGE,\n                crossOrigin: '',\n            }, function (err, texture, image) {\n                if (err)\n                    return reject(err);\n                _this.texture = texture;\n                _this.image = image;\n                _this.width = image.width;\n                _this.height = image.height;\n                resolve({ image: image, texture: texture });\n            });\n        });\n    };\n    GLCM.prototype.findNeighbors = function (_a, renderToCanvas) {\n        var angle = _a.angle, distance = _a.distance;\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        var _b = this, gl = _b.gl, width = _b.width, height = _b.height, quadBufferInfo = _b.quadBufferInfo;\n        gl.useProgram(this.neighborProgramInfo.program);\n        twgl.setBuffersAndAttributes(gl, this.neighborProgramInfo, quadBufferInfo);\n        // image to hold the result of the neighbors program\n        var neighborsFbi = renderToCanvas\n            ? null\n            : twgl.createFramebufferInfo(gl, [\n                {\n                    type: gl.FLOAT,\n                    min: gl.NEAREST,\n                    mag: gl.NEAREST,\n                    wrap: gl.CLAMP_TO_EDGE,\n                },\n            ], width, height);\n        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {\n            alert(\"can't render to floating point texture\");\n        }\n        twgl.setUniforms(this.neighborProgramInfo, {\n            u_angle: angle,\n            u_distance: distance,\n            u_textureSize: [width, height],\n            u_texture: this.texture,\n        });\n        twgl.bindFramebufferInfo(gl, neighborsFbi);\n        twgl.drawBufferInfo(gl, gl.TRIANGLES, quadBufferInfo);\n        return neighborsFbi;\n    };\n    GLCM.prototype.buildMatrices = function (neighborsFbi, _a, renderToCanvas) {\n        var reach = _a.reach, step = _a.step;\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        var _b = this, gl = _b.gl, width = _b.width, height = _b.height, glcmProgramInfo = _b.glcmProgramInfo, levels = _b.levels;\n        // for each window, find the texture offset and glcm offset\n        var _c = (0,_getWindows_js__WEBPACK_IMPORTED_MODULE_0__.getWindows)({\n            width: width,\n            height: height,\n            reach: reach,\n            step: step,\n            levels: levels,\n        }), xSize = _c.xSize, ySize = _c.ySize, locations = _c.locations;\n        this.xSize = xSize;\n        this.ySize = ySize;\n        this.locations = locations;\n        // source pixels for one window\n        var windowSize = 2 * reach + 1;\n        this.windowSize = windowSize;\n        var textureWindow = [];\n        for (var y = 0; y < windowSize; y++) {\n            for (var x = 0; x < windowSize; x++) {\n                textureWindow.push([x, y]);\n            }\n        }\n        var texturePositionsBufferInfo = twgl.createBufferInfoFromArrays(gl, {\n            texturePosition: { numComponents: 2, data: textureWindow.flat() },\n        });\n        gl.blendFunc(gl.ONE, gl.ONE);\n        gl.enable(gl.BLEND);\n        gl.useProgram(glcmProgramInfo.program);\n        twgl.setBuffersAndAttributes(gl, glcmProgramInfo, texturePositionsBufferInfo);\n        // create an image to store GLCM matrices\n        var glcmFbi = renderToCanvas\n            ? null\n            : twgl.createFramebufferInfo(gl, [\n                {\n                    type: gl.FLOAT,\n                    min: gl.NEAREST,\n                    mag: gl.NEAREST,\n                    wrap: gl.CLAMP_TO_EDGE,\n                },\n            ], xSize * levels, ySize * levels);\n        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {\n            alert(\"can't render to floating point texture\");\n        }\n        twgl.bindFramebufferInfo(gl, glcmFbi);\n        // count pixel differences to build GLCMs\n        locations.forEach(function (_a) {\n            var textureOffset = _a.textureOffset, glcmOffset = _a.glcmOffset;\n            twgl.setUniforms(glcmProgramInfo, {\n                u_texture: neighborsFbi.attachments[0],\n                u_textureSize: [neighborsFbi.width, neighborsFbi.height],\n                u_textureOffset: textureOffset,\n                u_glcmOffset: glcmOffset,\n                u_glcmSize: [xSize * levels, ySize * levels],\n                u_pixelsInWindow: windowSize * windowSize,\n            });\n            twgl.drawBufferInfo(gl, gl.POINTS, texturePositionsBufferInfo);\n        });\n        gl.blendFunc(gl.ONE, gl.ZERO);\n        gl.disable(gl.BLEND);\n        return glcmFbi;\n    };\n    GLCM.prototype.runStats = function (glcmFbi, statsProgramInfo, renderToCanvas) {\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        var _a = this, gl = _a.gl, xSize = _a.xSize, ySize = _a.ySize, levels = _a.levels, locations = _a.locations, windowSize = _a.windowSize;\n        var statsPointsBi = twgl.createBufferInfoFromArrays(gl, {\n            glcmOffset: {\n                numComponents: 2,\n                data: locations.map(function (l) { return l.glcmOffset; }).flat(),\n            },\n        });\n        gl.useProgram(statsProgramInfo.program);\n        twgl.setBuffersAndAttributes(gl, statsProgramInfo, statsPointsBi);\n        var statsFbi = renderToCanvas\n            ? null\n            : twgl.createFramebufferInfo(gl, [\n                {\n                    type: gl.FLOAT,\n                    min: gl.NEAREST,\n                    mag: gl.NEAREST,\n                    wrap: gl.CLAMP_TO_EDGE,\n                },\n            ], xSize, ySize);\n        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {\n            alert(\"can't render to floating point texture\");\n        }\n        twgl.bindFramebufferInfo(gl, statsFbi);\n        twgl.setUniforms(statsProgramInfo, {\n            u_texture: glcmFbi.attachments[0],\n            u_glcmSize: [xSize * levels, ySize * levels],\n        });\n        twgl.drawBufferInfo(gl, gl.POINTS, statsPointsBi);\n        return statsFbi;\n    };\n    GLCM.prototype.correlation = function (glcmFbi, renderToCanvas) {\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        return this.runStats(glcmFbi, this.correlationProgramInfo, renderToCanvas);\n    };\n    GLCM.prototype.dissimilarity = function (glcmFbi, renderToCanvas) {\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        return this.runStats(glcmFbi, this.dissimilarityProgramInfo, renderToCanvas);\n    };\n    GLCM.prototype.homogeneity = function (glcmFbi, renderToCanvas) {\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        return this.runStats(glcmFbi, this.homogeneityProgramInfo, renderToCanvas);\n    };\n    GLCM.prototype.asm = function (glcmFbi, renderToCanvas) {\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        return this.runStats(glcmFbi, this.asmProgramInfo, renderToCanvas);\n    };\n    GLCM.prototype.entropy = function (glcmFbi, renderToCanvas) {\n        if (renderToCanvas === void 0) { renderToCanvas = false; }\n        return this.runStats(glcmFbi, this.entropyProgramInfo, renderToCanvas);\n    };\n    GLCM.prototype.display = function (resultFbi) {\n        var _a = this, gl = _a.gl, quadBufferInfo = _a.quadBufferInfo, displayProgramInfo = _a.displayProgramInfo, xSize = _a.xSize, ySize = _a.ySize;\n        gl.useProgram(displayProgramInfo.program);\n        twgl.setBuffersAndAttributes(gl, displayProgramInfo, quadBufferInfo);\n        twgl.bindFramebufferInfo(gl, null);\n        twgl.setUniforms(displayProgramInfo, {\n            u_texture: resultFbi.attachments[0],\n            u_textureSize: [xSize, ySize],\n        });\n        twgl.drawBufferInfo(gl, gl.TRIANGLES, quadBufferInfo);\n    };\n    GLCM.prototype.getImageBitmap = function () {\n        return this.canvas.transferToImageBitmap();\n    };\n    return GLCM;\n}());\n\n\n\n//# sourceURL=webpack://GLCM/./src/index.ts?");

/***/ }),

/***/ "./src/getWindows.js":
/*!***************************!*\
  !*** ./src/getWindows.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWindows: () => (/* binding */ getWindows)\n/* harmony export */ });\n// reach is the number of pixels from window center to edge.\nfunction getWindows({ width, height, reach, step, levels }) {\n  const locations = [];\n  const xSize = Math.floor((width - 2 * reach) / step) + 1;\n  const ySize = Math.floor((height - 2 * reach) / step) + 1;\n\n  for (let y = 0; y < ySize; y++) {\n    for (let x = 0; x < xSize; x++) {\n      locations.push({\n        textureOffset: [\n          x * step, // start of the source window\n          y * step,\n        ],\n        glcmOffset: [\n          x * levels, // start of the glcm\n          y * levels,\n        ],\n      });\n    }\n  }\n\n  return {\n    xSize,\n    ySize,\n    locations,\n  };\n}\n\n\n//# sourceURL=webpack://GLCM/./src/getWindows.js?");

/***/ }),

/***/ "./src/shaders/ASM_fragment.js":
/*!*************************************!*\
  !*** ./src/shaders/ASM_fragment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ levels }) => {\n  const levelsAsFloat = levels.toFixed(1)\n\n  return `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\nuniform sampler2D u_texture;\n\nvarying vec2 v_glcmOffset;\nvarying vec2 v_glcmSize;\n\nvoid main() {\n\n  float ASM = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      ASM += P.r * P.r;\n    }\n  }\n\n  gl_FragColor = vec4(ASM, ASM, ASM, 1);\n}\n`\n});\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/ASM_fragment.js?");

/***/ }),

/***/ "./src/shaders/correlation_fragment.js":
/*!*********************************************!*\
  !*** ./src/shaders/correlation_fragment.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ levels }) => {\n  const levelsAsFloat = levels.toFixed(1)\n\n  return `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\nuniform sampler2D u_texture;\n\nvarying vec2 v_glcmOffset;\nvarying vec2 v_glcmSize;\n\n\nvoid main() {\n\n  float meanI = 0.0;\n  float meanJ = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      meanI += i * P.r;\n      meanJ += j * P.r;\n    }\n  }\n\n  float stdevI = 0.0;\n  float stdevJ = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      stdevI += P.r * (i - meanI) * (i - meanI);\n      stdevJ += P.r * (j - meanJ) * (j - meanJ);\n    }\n  }\n\n  float correlation = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      correlation += P.r * (i - meanI) * (j - meanJ) / sqrt(stdevI * stdevJ);\n    }\n  }\n\n  // Why doesn't correlation run -1 to +1 as expected?\n  // https://prism.ucalgary.ca/server/api/core/bitstreams/8f9de234-cc94-401d-b701-f08ceee6cfdf/content\n  // correlation = correlation / 2.0 + 1.0\n\n  gl_FragColor = vec4(correlation, correlation, correlation, 1);\n}\n`\n});\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/correlation_fragment.js?");

/***/ }),

/***/ "./src/shaders/display_fragment.js":
/*!*****************************************!*\
  !*** ./src/shaders/display_fragment.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\n// our texture\nuniform sampler2D u_texture;\nuniform vec2 u_textureSize;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nvoid main() {\n\n   vec4 pixel = texture2D(u_texture, v_texCoord);\n\n   gl_FragColor = pixel;\n}\n`);\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/display_fragment.js?");

/***/ }),

/***/ "./src/shaders/display_vertex.js":
/*!***************************************!*\
  !*** ./src/shaders/display_vertex.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\nattribute vec4 position;\nattribute vec2 texcoord;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\n   gl_Position = vec4(position.x, position.y, 0, 1);\n\n   v_texCoord = texcoord;\n}\n`);\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/display_vertex.js?");

/***/ }),

/***/ "./src/shaders/dissimilarity_fragment.js":
/*!***********************************************!*\
  !*** ./src/shaders/dissimilarity_fragment.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ levels }) => {\n  const levelsAsFloat = levels.toFixed(1)\n\n  return `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\nuniform sampler2D u_texture;\n\nvarying vec2 v_glcmOffset;\nvarying vec2 v_glcmSize;\n\nvoid main() {\n\n  float dissimilarity = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      dissimilarity += P.r * abs(i - j);\n    }\n  }\n\n  gl_FragColor = vec4(dissimilarity, dissimilarity, dissimilarity, 1);\n}\n`\n});\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/dissimilarity_fragment.js?");

/***/ }),

/***/ "./src/shaders/entropy_fragment.js":
/*!*****************************************!*\
  !*** ./src/shaders/entropy_fragment.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ levels }) => {\n  const levelsAsFloat = levels.toFixed(1)\n\n  return `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\nuniform sampler2D u_texture;\n\nvarying vec2 v_glcmOffset;\nvarying vec2 v_glcmSize;\n\nvoid main() {\n\n  float entropy = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      if (P.r > 0.0) {\n        entropy += P.r * -log(P.r);\n      }\n    }\n  }\n\n  gl_FragColor = vec4(entropy, entropy, entropy, 1);\n}\n`\n});\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/entropy_fragment.js?");

/***/ }),

/***/ "./src/shaders/glcm_fragment.js":
/*!**************************************!*\
  !*** ./src/shaders/glcm_fragment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\nvarying float v_pixelsInWindow;\n\nvoid main() {\n  // intent is to increment by one when gl.blendFunc(gl.ONE, gl.ONE)\n  gl_FragColor = vec4(1.0 / v_pixelsInWindow, 0, 0, 1);\n}\n`);\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/glcm_fragment.js?");

/***/ }),

/***/ "./src/shaders/glcm_vertex.js":
/*!************************************!*\
  !*** ./src/shaders/glcm_vertex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ levels }) => {\n  const levelsAsFloat = levels.toFixed(1)\n\n  return `\nuniform sampler2D u_texture;\nuniform vec2 u_textureSize;\nuniform vec2 u_textureOffset;\nattribute vec2 texturePosition;\n\nuniform vec2 u_glcmOffset;\nuniform vec2 u_glcmSize;\n\nuniform float u_pixelsInWindow;\nvarying float v_pixelsInWindow;\n\n//attribute vec4 position;\n\nvoid main() {\n\n  vec4 color = texture2D(u_texture, (u_textureOffset + texturePosition + 0.5) / u_textureSize);\n\n  float a = floor(color.x * ${levelsAsFloat});\n  float b = floor(color.y * ${levelsAsFloat});\n  vec2 glcmAddress = vec2(a, b);\n\n  gl_Position = vec4(((u_glcmOffset + glcmAddress + vec2(0.5,0.5)) / u_glcmSize * 2.0) - vec2(1.0,1.0), 0, 1);\n\n  gl_PointSize = 1.0;\n\n  v_pixelsInWindow = u_pixelsInWindow;\n}\n`\n});\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/glcm_vertex.js?");

/***/ }),

/***/ "./src/shaders/homogeneity_fragment.js":
/*!*********************************************!*\
  !*** ./src/shaders/homogeneity_fragment.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ levels }) => {\n  const levelsAsFloat = levels.toFixed(1)\n\n  return `\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\nuniform sampler2D u_texture;\n\nvarying vec2 v_glcmOffset;\nvarying vec2 v_glcmSize;\n\nvoid main() {\n\n  float homogeneity = 0.0;\n\n  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {\n    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {\n\n      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);\n\n      homogeneity += P.r / (1.0 + (i-j)*(i-j));\n    }\n  }\n\n  gl_FragColor = vec4(homogeneity, homogeneity, homogeneity, 1);\n}\n`\n});\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/homogeneity_fragment.js?");

/***/ }),

/***/ "./src/shaders/neighbor_fragment.js":
/*!******************************************!*\
  !*** ./src/shaders/neighbor_fragment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n\n// our texture\nuniform sampler2D u_texture;\nuniform vec2 u_textureSize;\nuniform float u_angle;\nuniform float u_distance;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nvoid main() {\n\n   vec2 onePixel = vec2(1.0, 1.0) / u_textureSize;\n   vec2 neighborPosition = vec2(u_distance * cos(u_angle), u_distance * sin(u_angle));\n   vec2 neighborOffset = onePixel * neighborPosition;\n\n   vec4 pixel = texture2D(u_texture, v_texCoord);\n   vec4 neighbor = texture2D(u_texture, v_texCoord + neighborOffset);\n\n   float pixelLevel = pixel.r + pixel.g / 2.0;\n   float neighborLevel = neighbor.r + neighbor.g / 2.0;\n\n   gl_FragColor = vec4(pixelLevel, neighborLevel, 0, 1);\n}\n`);\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/neighbor_fragment.js?");

/***/ }),

/***/ "./src/shaders/neighbor_vertex.js":
/*!****************************************!*\
  !*** ./src/shaders/neighbor_vertex.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n\nattribute vec4 position;\nattribute vec2 texcoord;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n\n   gl_Position = vec4(position.x, -position.y, 0, 1);\n\n   v_texCoord = texcoord;\n}\n`);\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/neighbor_vertex.js?");

/***/ }),

/***/ "./src/shaders/stats_vertex.js":
/*!*************************************!*\
  !*** ./src/shaders/stats_vertex.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\nattribute vec4 position;\n\nattribute vec2 glcmOffset;\nvarying vec2 v_glcmOffset;\n\nuniform vec2 u_glcmSize;\nvarying vec2 v_glcmSize;\n\nvoid main() {\n   gl_Position = vec4(((glcmOffset + vec2(0.5,0.5)) / u_glcmSize  * 2.0) - 1.0, 0, 1);\n\n   v_glcmOffset = glcmOffset;\n   v_glcmSize = u_glcmSize;\n}\n`);\n\n\n//# sourceURL=webpack://GLCM/./src/shaders/stats_vertex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__.GLCM;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});