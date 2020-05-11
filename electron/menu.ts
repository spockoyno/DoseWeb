import { app, Menu } from 'electron';
import MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;

export function setMenu(): void {

//@ts-nocheck
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'Edit',
      submenu: [{ type: 'separator' }, { role: 'copy' }, { role: 'selectAll' }]
    },
    {
      label: 'View',

      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }]
    },
    {
      role: 'help'
    }
  ];

  if (process.platform === 'darwin') {

    template.unshift({
      label: app.getName(),

      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    });

    // Window menu
    template[3].submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' }
    ];
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
