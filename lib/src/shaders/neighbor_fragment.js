export default `

#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

// our texture
uniform sampler2D u_texture;
uniform vec2 u_textureSize;
uniform float u_angle;
uniform float u_distance;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {

   vec2 onePixel = vec2(1.0, 1.0) / u_textureSize;
   vec2 neighborPosition = vec2(u_distance * cos(u_angle), u_distance * sin(u_angle));
   vec2 neighborOffset = onePixel * neighborPosition;

   vec4 pixel = texture2D(u_texture, v_texCoord);
   vec4 neighbor = texture2D(u_texture, v_texCoord + neighborOffset);

   gl_FragColor = vec4(pixel.r+pixel.g, neighbor.r+neighbor.g, 0, 1);
}
`;
