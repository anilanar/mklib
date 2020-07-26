const path = require("path");

const root = path.resolve(__dirname, "../../../");

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
      root: subpath(result.name),
      pkg: pkg(),
    };
  },
};

function pkg() {
  return require(path.resolve(root, `./package.json`));
}

function subpath(name) {
  return `packages/${last_part(name)}`;
}

function last_part(s) {
  const r = s.split("/");
  return r[r.length - 1];
}
