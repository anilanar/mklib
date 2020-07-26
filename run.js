#!/usr/bin/env node
const execa = require("execa");
const path = require("path");

execa
  .command(
    `${path.resolve(__dirname, "./node_modules/.bin/nps")} -c ${path.resolve(
      __dirname,
      "./scripts.js"
    )} ${process.argv.slice(2).join(" ")}`,
    {
      stdio: "inherit",
    }
  )
  .catch(() => {});
