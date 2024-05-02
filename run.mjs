#!/usr/bin/env node
import { execaCommand } from "execa";
import { URL } from "url";

execaCommand(`npx which nps`, {
  cwd: path("."),
})
  .then((x) => x.stdout)
  .then((binary) =>
    execaCommand(
      `${binary} -c ${path("./scripts.js")} ${process.argv.slice(2).join(" ")}`,
      {
        stdio: "inherit",
      }
    )
  )
  .catch((err) => console.error(err));

function path(p) {
  return new URL(p, import.meta.url).pathname;
}
