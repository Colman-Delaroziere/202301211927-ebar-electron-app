import React from "react";

import "./SideBar.scss";

function SideBarItem({ children, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`side-bar-item ${selected ? "selected" : ""}`}
    >
      {children}
    </div>
  );
}
function SideBarSpacer() {
  return <div className="side-bar-spacer" />;
}

export default function SideBar({ children }) {
  return <div className="side-bar">{children}</div>;
}

export { SideBarItem, SideBarSpacer };
