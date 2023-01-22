import React from "react";

import SideBar, { SideBarItem, SideBarSpacer } from "../components/SideBar";

import "./Connect.scss";

export default function Connect({ setPage }) {
  return (
    <>
      <SideBar>
        <SideBarItem onClick={() => setPage("editor")}>Editor</SideBarItem>
        <SideBarItem selected>Connect</SideBarItem>
        <SideBarSpacer />
        <SideBarItem>Settings</SideBarItem>
      </SideBar>
      <div className="content">
        <div className="coming-soon">Coming soon!! ; )</div>
      </div>
    </>
  );
}
