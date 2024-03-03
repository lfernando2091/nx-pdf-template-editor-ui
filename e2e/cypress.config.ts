import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run nx-pdf-json-editor-ui:serve',
        production: 'nx run nx-pdf-json-editor-ui:preview',
      },
      ciWebServerCommand: 'nx run nx-pdf-json-editor-ui:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
