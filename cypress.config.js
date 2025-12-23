const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a7bq2k',
  e2e: {

    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
    baseUrl: "https://practice.expandtesting.com/notes",
    experimentalPromptCommand: true,
    experimentalStudio:true,
    defaultCommandTimeout: 10000
  },  
});
