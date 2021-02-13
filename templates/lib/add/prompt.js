const path = require("path");

const rootDir = path.resolve(__dirname, "../../../");

module.exports = {
  prompt: async ({ prompter, args }) => {
    const result = await prompter.prompt([
      {
        type: "input",
        name: "name",
        message: "Name",
      },
      {
        type: "confirm",
        name: "private",
        message: "Private package?",
      },
    ]);

    return {
      ...result,
      rootPkg: require(path.resolve(process.cwd(), "./package.json")),
      subdir: subpath(result.name),
      mklib: mklib(),
    };
  },
};

function mklib() {
  return require(path.resolve(rootDir, `./package.json`));
}

function subpath(name) {
  return `packages/${last_part(name)}`;
}

function last_part(s) {
  const r = s.split("/");
  return r[r.length - 1];
}
