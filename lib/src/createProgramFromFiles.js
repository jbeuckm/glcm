export async function createProgramFromFiles(gl, vsPath, fsPath) {
  return Promise.all([
    fetch(`../shaders/${vsPath}.glsl`).then((response) => response.text()),
    fetch(`../shaders/${fsPath}.glsl`).then((response) => response.text()),
  ]).then(([vs, fs]) => twgl.createProgramInfo(gl, [vs, fs]));
}
