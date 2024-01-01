const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 3000,
  projectId: 'yv2ztm',
  retries: 3,
  video: true,
  videoCompression: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 100000,
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/report/results-[hash].xml',
    toConsole: false,
  },  
  e2e: {
    supportFile: false,    
    specPattern: 'cypress/integration',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },   
  },
})