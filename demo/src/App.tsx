import { useEffect, useRef, useState } from "react";
import GLCM from "glcm";

export function App() {
  const outputRef = useRef();

  const [imageSrc, setImageSrc] = useState("./14896.jpg");
  const [angle, setAngle] = useState(Math.PI / 4);
  const [distance, setDistance] = useState(7);
  const [reach, setReach] = useState(8);
  const [step, setStep] = useState(4);
  const [levels, setLevels] = useState(16);

  const [glcm, setGlcm] = useState();

  const update = () => {
    if (!glcm) return;
    const neighborsBi = glcm.findNeighbors({ angle, distance });
    const mfbi = glcm.buildMatrices(neighborsBi, { reach, step, levels });
    const correlationFbi = glcm.correlation(mfbi);
    glcm.display(correlationFbi);
  };

  useEffect(() => {
    if (!outputRef.current || !imageSrc) return;

    var gl = outputRef.current.getContext("webgl");
    const glcm = new GLCM(gl);

    glcm.loadImage(imageSrc).then(async ({ image }) => {
      document.getElementById("original").replaceChildren(image);

      await glcm.init();

      setGlcm(glcm);
    });
  }, [outputRef, imageSrc]);

  useEffect(() => {
    update(glcm);
  }, [glcm, angle, distance, reach, step, levels]);

  return (
    <tr>
      <td id="original"></td>
      <td style={{ verticalAlign: "top" }}>
        <div>
          <span style={{ display: "inline-block" }}>
            <div>angle {((angle * 180) / Math.PI).toPrecision(3)}</div>
            <input
              type="range"
              min={0}
              max={Math.PI}
              value={angle}
              step={Math.PI / 36}
              onChange={(event) => setAngle(+event.target.value)}
            />
          </span>

          <span>
            <div>distance {distance}</div>
            <input
              type="range"
              min={1}
              max={20}
              value={distance}
              step={0.5}
              onChange={(event) => setDistance(+event.target.value)}
            />
          </span>

          <span>
            <div>reach {reach}</div>
            <input
              type="range"
              min={3}
              max={20}
              value={reach}
              onChange={(event) => setReach(+event.target.value)}
            />
          </span>

          <span>
            <div>step {step}</div>
            <input
              type="range"
              min={4}
              max={20}
              value={step}
              onChange={(event) => setStep(+event.target.value)}
            />
          </span>

          <span>
            <div>levels {levels}</div>
            <input
              disabled
              type="range"
              min={1}
              max={20}
              value={levels}
              onChange={(event) => setLevel(+event.target.value)}
            />
          </span>
        </div>
      </td>
      <td>
        <canvas ref={outputRef} width="256" height="256"></canvas>
      </td>
    </tr>
  );
}

export default App;
