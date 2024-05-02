#!/usr/bin/env node

import path from "path";
import { bootstrap } from "commitizen/dist/cli/git-cz.js";

export const commit = async (argv) =>
  bootstrap(
    {
      cliPath: path.dirname(
        new URL(import.meta.resolve("commitizen/package.json")).pathname
      ),
      config: {
        path: "cz-conventional-changelog",
      },
    },
    argv
  );
