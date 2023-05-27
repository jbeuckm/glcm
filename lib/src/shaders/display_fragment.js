export default () => `
#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

// our texture
uniform sampler2D u_texture;
uniform vec2 u_textureSize;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {

   vec4 pixel = texture2D(u_texture, v_texCoord);

   gl_FragColor = pixel;
}
`
