export default () => `
#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

varying float v_pixelsInWindow;

void main() {
  // intent is to increment by one when gl.blendFunc(gl.ONE, gl.ONE)
  gl_FragColor = vec4(1.0 / v_pixelsInWindow, 0, 0, 1);
}
`
