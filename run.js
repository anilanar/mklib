#!/usr/bin/env node
const execa = require("execa");
const p = require("path");

execa
  .command(
    `yarn nps -c ${p.resolve(__dirname, "./scripts.js")} ${process.argv
      .slice(2)
      .join(" ")}`,
    {
      stdio: "inherit",
    }
  )
  .catch(() => {});
