import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import "./index.scss";

createRoot(document.getElementById("app")).render(<App />);