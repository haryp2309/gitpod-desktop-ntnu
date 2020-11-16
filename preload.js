// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

// TODO
/* window.webContents.openDevTools()
window.webContents.on('did-finish-load', () => {
  window.webContents.executeJavaScript('if (document.getElementById("theia-top-panel") != null) {document.getElementById("theia-top-panel").style.paddingLeft = "60px"}')

}) */
