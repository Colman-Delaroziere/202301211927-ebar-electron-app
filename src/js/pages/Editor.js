import React, { useEffect, useRef, useState } from "react";

import SideBar, { SideBarItem, SideBarSpacer } from "../components/SideBar";
import Canvas from "../components/Canvas";

import "./Editor.scss";

export default function Editor({ setPage }) {
  // weave functions
  const setWeaveSize = (weftPicks, warpEnds) => {
    return Array.from({ length: weftPicks }, (_, i) => {
      return Array.from({ length: warpEnds }, (_, j) => {
        return (j + i) % 2 == 0;
      });
    });
  };
  const [weave, setWeave] = useState(setWeaveSize(24, 24));
  const canvasRef = useRef(null);

  // event listeners
  useEffect(() => {
    if (canvasRef.current) {
      function modifyWeave(event) {
        const rect = canvasRef.current.getBoundingClientRect();

        const weftI = (
          Math.round(canvasRef.current.height - (event.clientY - rect.top)) / 10
        )
          .toString()
          .split(".")[0];
        const warpI = (Math.round(event.clientX - rect.left) / 10)
          .toString()
          .split(".")[0];

        console.log(weave);
        let newWeave = [...weave];
        newWeave[weftI][warpI] = !weave[weftI][warpI];
        setWeave(newWeave);
      }

      canvasRef.current.addEventListener("mousedown", modifyWeave);
    }
  }, [canvasRef]);

  return (
    <>
      <SideBar>
        <SideBarItem selected>Editor</SideBarItem>
        <SideBarItem onClick={() => setPage("connect")}>Connect</SideBarItem>
        <SideBarSpacer />
        <SideBarItem>Settings</SideBarItem>
      </SideBar>
      <div className="content">
        <Canvas weave={weave} canvasRef={canvasRef} />
        <div className="sizes-container">
          24 x <input placeholder={24} />
        </div>{" "}
      </div>
    </>
  );
}
