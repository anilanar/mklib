#!/usr/bin/env node
import { spawn as spawn_ } from "node:child_process";
import { execaCommand } from "execa";
import { URL } from "url";
import { program } from "commander";
import { commit } from "./commit.mjs";

program
  .command("new", {})
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (_, cmd) => {
      const hygen = await bin("hygen");
      await spawn(hygen, ["lib", "new", ...cmd.args], {
        env: {
          ...process.env,
          HYGEN_TMPLS: path("./templates"),
        },
        stdio: "inherit",
      });
    })
  );

program
  .command("add")
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (_, cmd) => {
      const hygen = await bin("hygen");
      await spawn(hygen, ["lib", "add", ...cmd.args], {
        env: {
          ...process.env,
          HYGEN_TMPLS: path("./templates"),
        },
        stdio: "inherit",
      });
    })
  );

program
  .command("build")
  .alias("prepare")
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (_, cmd) => {
      const lerna = await bin("lerna");
      await spawn(lerna, ["run", "clean", ...cmd.args], {
        stdio: "inherit",
      });
      await spawn(lerna, ["run", "build", ...cmd.args], {
        stdio: "inherit",
      });
      await spawn(lerna, ["run", "build:cjs", ...cmd.args], {
        stdio: "inherit",
      });
    })
  );

program
  .command("lint")
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (_, cmd) => {
      const lerna = await bin("lerna");
      await spawn(lerna, ["run", "lint", ...cmd.args], {
        stdio: "inherit",
      });
    })
  );

program
  .command("test")
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (_, cmd) => {
      const lerna = await bin("lerna");
      await spawn(lerna, ["run", "test", ...cmd.args], {
        stdio: "inherit",
      });
    })
  );

program
  .command("commit")
  .helpOption(false)
  .action(
    ignoreError(async () => {
      await commit();
    })
  );

program
  .command("version")
  .option("--pre", "Pre-release version")
  .option("--grad", "Graduate pre-release version")
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (options, cmd) => {
      const args = cmd.args.filter(
        (arg) => arg !== "--pre" && arg !== "--grad"
      );
      const lerna = await bin("lerna");
      await spawn(
        lerna,
        [
          "version",
          "--conventional-commits",
          "--create-release",
          "github",
          ...(options.pre ? ["--conventional-prerelease"] : []),
          ...(options.grad ? ["--conventional-graduate"] : []),
          ...args,
        ],
        {
          stdio: "inherit",
        }
      );
    })
  );

program
  .command("publish")
  .helpOption(false)
  .allowUnknownOption()
  .action(
    ignoreError(async (_, cmd) => {
      const lerna = await bin("lerna");
      await spawn(lerna, ["publish", "from-git", ...cmd.args], {
        stdio: "inherit",
      });
    })
  );

passthrough("tsc");
passthrough("eslint");
passthrough("jest");

program.parse();

function path(p) {
  return new URL(p, import.meta.url).pathname;
}

async function bin(name) {
  const cmd = await execaCommand(`npx which ${name}`, {
    cwd: path("."),
  });
  return cmd.stdout;
}

function passthrough(cmdName) {
  program
    .command(cmdName)
    .helpOption(false)
    .allowUnknownOption()
    .action(
      ignoreError(async (_, cmd) => {
        const binPath = await bin(cmdName);
        await spawn(binPath, [...cmd.args], {
          stdio: "inherit",
        });
      })
    );
}

function spawn(...args) {
  const child = spawn_(...args);

  return new Promise((resolve, reject) => {
    child.on("error", () => resolve);

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`child exited with code ${code}`));
      }
    });
  });
}

function ignoreError(f) {
  return (...args) => f(...args).catch(() => {});
}
