const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: "https://www.demoblaze.com",
    testIsolation: false,
  },
  
})
