import React, { useState } from "react";

import SideBar, { SideBarItem, SideBarSpacer } from "./components/SideBar";
import Editor from "./pages/Editor";
import Connect from "./pages/Connect";

export default function App() {
  const [page, setPage] = useState("connect");

  return (
    <>
      {page == "editor" ? (
        <Editor setPage={setPage} />
      ) : page == "connect" ? (
        <Connect setPage={setPage} />
      ) : (
        <>
          <SideBar>
            <SideBarItem>Editor</SideBarItem>
            <SideBarItem>Connect</SideBarItem>
            <SideBarSpacer />
            <SideBarItem>Settings</SideBarItem>
          </SideBar>
        </>
      )}
    </>
  );
}
