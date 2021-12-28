#!/usr/bin/env node
import { execaCommand } from "execa";
import { URL } from "url";

execaCommand(
  `${path("./node_modules/.bin/nps")} -c ${path("./scripts.js")} ${process.argv
    .slice(2)
    .join(" ")}`,
  {
    stdio: "inherit",
  }
).catch((err) => console.error(err));

function path(p) {
  return new URL(p, import.meta.url).pathname;
}
