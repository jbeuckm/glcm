export const sampleFramebuffer = (gl, fb, size = 10) => {
  // var fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  // gl.framebufferTexture2D(
  //   gl.FRAMEBUFFER,
  //   gl.COLOR_ATTACHMENT0,
  //   gl.TEXTURE_2D,
  //   texture,
  //   0
  // );
  if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) == gl.FRAMEBUFFER_COMPLETE) {
    var pixels = new Uint8Array(size * size * 4);
    gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    console.log(pixels); // Uint8Array
  }

  return;
  /*
  // make a framebuffer
  const fb = gl.createFramebuffer();

  // make this the current frame buffer
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

  // attach the texture to the framebuffer.
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );

  // check if you can read from this type of texture.
  let canRead =
    gl.checkFramebufferStatus(gl.FRAMEBUFFER) == gl.FRAMEBUFFER_COMPLETE;

  if (canRead) {
    // bind the framebuffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

    // read the pixels
    const pixels = new Float32Array(
      gl.drawingBufferWidth * gl.drawingBufferHeight * 4
    );
    gl.readPixels(
      0,
      0,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight,
      gl.RGBA,
      gl.FLOAT,
      pixels
    );
    console.log(pixels); // Uint8Array

    // Unbind the framebuffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  // Unbind the framebuffer
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  */
};
