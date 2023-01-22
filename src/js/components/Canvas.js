import React, { useEffect } from "react";

import "./Canvas.scss";

export default function Canvas({ weave, canvasRef }) {
  // update canvas
  useEffect(() => {
    if (weave && canvasRef.current) {
      const canvasCtx = canvasRef.current.getContext("2d");
      // clear the current canvas
      canvasCtx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      const weftPicks = weave.length;
      const warpEnds = weave[0].length;

      const blockSize = 10;

      canvasRef.current.height = weftPicks * 10;
      canvasRef.current.width = warpEnds * 10;

      for (let weftI = 0; weftI < weftPicks; weftI++) {
        for (let warpI = 0; warpI < warpEnds; warpI++) {
          let isLift =
            weave[weftI % weave.length][
              warpI % weave[weftI % weave.length].length
            ];

          canvasCtx.fillStyle = isLift ? "black" : "white";
          canvasCtx.fillRect(
            blockSize * warpI,
            canvasRef.current.height - blockSize * (weftI + 1),
            blockSize,
            blockSize
          );
        }
      }
    }
  }, [weave, canvasRef]);

  return (
    <div className="canvas-container">
      {/* <div className="canvas-line-indicator"></div> */}
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
}
