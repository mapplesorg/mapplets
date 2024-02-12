import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mapplet-playground:serve',
        production: 'nx run mapplet-playground:preview',
      },
      ciWebServerCommand: 'nx run mapplet-playground:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
