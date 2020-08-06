#!/usr/bin/env node

const path = require("path");
const bootstrap = require("commitizen/dist/cli/git-cz").bootstrap;

bootstrap({
  cliPath: path.dirname(require.resolve("commitizen/package.json")),
  config: {
    path: "cz-lerna-changelog",
  },
});
