export default ({ levels }) => {
  const levelsAsFloat = levels.toFixed(1)

  return `
#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform sampler2D u_texture;

varying vec2 v_glcmOffset;
varying vec2 v_glcmSize;

void main() {

  float homogeneity = 0.0;

  for (float j = 0.0; j < ${levelsAsFloat}; j += 1.0) {
    for (float i = 0.0; i < ${levelsAsFloat}; i += 1.0) {

      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);

      homogeneity += P.r / (1.0 + (i-j)*(i-j));
    }
  }

  gl_FragColor = vec4(homogeneity, homogeneity, homogeneity, 1);
}
`
}
