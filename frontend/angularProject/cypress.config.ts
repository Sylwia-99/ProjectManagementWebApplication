import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      screenshotOnRunFailure: true,
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
  },
  screenshotsFolder: 'cypress/reports/mochareports/screenshots',
  video: false,
  projectId: 'ai6spc',
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'http://localhost:4200/#/',
  },
});
