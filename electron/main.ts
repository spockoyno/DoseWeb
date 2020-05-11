import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';
import {setMenu} from './menu';


let win: BrowserWindow | undefined
const args = process.argv.slice(1)
const serve = args.some(val => val === '--serve')
const devTools = args.some(val => val === '--tools')

function createWindow(): void {
  // PythonShell.run('domain-logic/main.py', null, err => {
  //   if (err) {
  //     console.error(err);
  //   }
  // });

  const electronScreen = screen
  const size = electronScreen.getPrimaryDisplay().workAreaSize

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 1200,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    maxWidth: size.width,
    maxHeight: size.height,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  setMenu()

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    })
    win.loadURL('http://localhost:4200')
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  if (devTools) {
    win.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would models window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = undefined
  })
}


try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)

  // Runs python backend server when electron app starts up
  // Todo: what happens if this dies, should it give a warning to the user
  // Todo: what happens if this fails to start
  // Todo: what happens when electron app exists, does it kill the child process
  // app.on('ready', runPythonServerProc)

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!win) {
      createWindow()
    }
  })
} catch (e) {
  // Catch Error
  // throw e;
}
