const path = require("path");

module.exports = {
  scripts: {
    new: `HYGEN_TMPLS=${path.resolve(__dirname, "./templates")} ${bin(
      "hygen"
    )} lib new`,
    add: `HYGEN_TMPLS=${path.resolve(__dirname, "./templates")} ${bin(
      "hygen"
    )} lib add`,
    build: `${bin(
      "lerna"
    )} run clean && lerna run build && lerna run build:cjs`,
    lint: `${bin("lerna")} run lint`,
    test: `${bin("lerna")} run test`,
    commit: `${path.resolve(__dirname, "./commit.js")}`,
    version: `GH_TOKEN=$GHT ${bin(
      "lerna"
    )} version --conventional-commits --create-release github`,
    "version:pre": `${bin("nps")} "version --conventional-prerelease"`,
    "version:grad": `${bin("nps")} "version --conventional-graduate"`,
    publish: `${bin("lerna")} publish from-git`,
    prepare: `${bin("nps")} build`,
  },
};

function bin(name) {
  return path.resolve(__dirname, "node_modules/.bin", name);
}
