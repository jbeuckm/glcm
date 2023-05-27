export default () => `
attribute vec4 position;
attribute vec2 texcoord;

varying vec2 v_texCoord;

void main() {

   gl_Position = vec4(position.x, position.y, 0, 1);

   v_texCoord = texcoord;
}
`
