const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "p66ydy",
  e2e: {
    baseUrl: "http://localhost:3001/",
  },
});
