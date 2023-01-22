const { app, BrowserWindow } = require("electron");
const path = require("path");
require("update-electron-app")();

const isDev = !app.isPackaged;

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },

    width: 800,
    height: 600,
    show: false,
    titleBarStyle: "hidden",
    backgroundColor: "#ffffff",
    trafficLightPosition: {
      x: 15,
      y: 13,
    },
  });

  mainWindow.loadFile("index.html");
  mainWindow.once("ready-to-show", mainWindow.show);
}

if (isDev) {
  // electron reload
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
