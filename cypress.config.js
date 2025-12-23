const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a7bq2k',
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://practice.expandtesting.com/notes",
    experimentalPromptCommand: true,
    experimentalStudio:true,
    defaultCommandTimeout: 10000
  },  
});
