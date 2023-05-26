// reach is the number of pixels from window center to edge.
export function getWindows({ width, height, reach, step, levels }) {
  const locations = [];
  const xSize = Math.floor((width - 2 * reach) / step) + 1;
  const ySize = Math.floor((height - 2 * reach) / step) + 1;

  for (let y = 0; y < ySize; y++) {
    for (let x = 0; x < xSize; x++) {
      locations.push({
        textureOffset: [
          x * step, // start of the source window
          y * step,
        ],
        glcmOffset: [
          x * levels, // start of the glcm
          y * levels,
        ],
      });
    }
  }

  return {
    xSize,
    ySize,
    locations,
  };
}
