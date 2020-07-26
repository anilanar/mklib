#!/usr/bin/env node
const execa = require("execa");
const p = require("path");

execa
  .command(
    `${path.resolve(__dirname, "./node_modules/.bin/nps")} -c ${p.resolve(
      __dirname,
      "./scripts.js"
    )} ${process.argv.slice(2).join(" ")}`,
    {
      stdio: "inherit",
    }
  )
  .catch(() => {});
