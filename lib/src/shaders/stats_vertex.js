export default () => `
attribute vec4 position;

attribute vec2 glcmOffset;
varying vec2 v_glcmOffset;

uniform vec2 u_glcmSize;
varying vec2 v_glcmSize;

void main() {
   gl_Position = vec4(((glcmOffset + vec2(0.5,0.5)) / u_glcmSize  * 2.0) - 1.0, 0, 1);

   v_glcmOffset = glcmOffset;
   v_glcmSize = u_glcmSize;
}
`
