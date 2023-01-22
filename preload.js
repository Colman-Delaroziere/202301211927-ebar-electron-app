const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notificationApi:sendNotification", message);
    },
  },
  fileApi: {
    createFile(name, content) {
      ipcRenderer.send("fileApi:createFile", name, content);
    },
    getFiles() {
      ipcRenderer.send("fileApi:getFiles");
      return new Promise((resolve) => {
        ipcRenderer.once("fileApi:getFilesResults", (_, data) => resolve(data));
      });
    },
  },
});
