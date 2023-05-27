export default ({ levels }) => {
  const levelsAsFloat = levels.toFixed(1)

  return `
uniform sampler2D u_texture;
uniform vec2 u_textureSize;
uniform vec2 u_textureOffset;
attribute vec2 texturePosition;

uniform vec2 u_glcmOffset;
uniform vec2 u_glcmSize;

uniform float u_pixelsInWindow;
varying float v_pixelsInWindow;

//attribute vec4 position;

void main() {

  vec4 color = texture2D(u_texture, (u_textureOffset + texturePosition) / u_textureSize);

  float a = floor(color.x * ${levelsAsFloat});
  float b = floor(color.y * ${levelsAsFloat});
  vec2 glcmAddress = vec2(a, b);

  gl_Position = vec4(((u_glcmOffset + glcmAddress + vec2(0.5,0.5)) / u_glcmSize * 2.0) - vec2(1.0,1.0), 0, 1);

  gl_PointSize = 1.0;

  v_pixelsInWindow = u_pixelsInWindow;
}
`
}
