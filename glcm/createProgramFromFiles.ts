// @ts-nocheck
import * as twgl from 'twgl.js/dist/5.x/twgl-full.module.js';

export async function createProgramFromFiles(gl, vsPath, fsPath) {
  return Promise.all([
    fetch(`../shaders/${vsPath}.glsl`).then((response) => response.text()),
    fetch(`../shaders/${fsPath}.glsl`).then((response) => response.text()),
  ]).then(([vs, fs]) => twgl.createProgramInfo(gl, [vs, fs]));
}
