#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform sampler2D u_texture;

varying vec2 v_glcmOffset;
varying vec2 v_glcmSize;
varying float v_pixelsInWindow;


void main() {

  float meanI = 0.0;
  float meanJ = 0.0;

  for (float j = 0.0; j < 16.0; j += 1.0) {
    for (float i = 0.0; i < 16.0; i += 1.0) {

      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);

      meanI += i * P.r;
      meanJ += j * P.r;
    }
  }

  float stdevI = 0.0;
  float stdevJ = 0.0;

  for (float j = 0.0; j < 16.0; j += 1.0) {
    for (float i = 0.0; i < 16.0; i += 1.0) {

      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);

      stdevI += P.r * (i - meanI) * (i - meanI);
      stdevJ += P.r * (j - meanJ) * (j - meanJ);
    }
  }

  float correlation = 0.0;

  for (float j = 0.0; j < 16.0; j += 1.0) {
    for (float i = 0.0; i < 16.0; i += 1.0) {

      vec4 P = texture2D(u_texture, (v_glcmOffset + vec2(i, j)) / v_glcmSize);

      correlation += P.r * (i - meanI) * (j - meanJ) / sqrt(stdevI * stdevJ);
    }
  }

  //gl_FragColor = vec4(correlation / 2.0 + 1.0, correlation / 2.0 + 1.0, correlation / 2.0 + 1.0, 1);
  gl_FragColor = vec4(correlation, correlation, correlation, 1);
}
