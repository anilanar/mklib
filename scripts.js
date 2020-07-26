const path = require("path");

console.log(`HYGEN_TMPLS=${path.resolve(__dirname, "./templates")}`);

module.exports = {
  scripts: {
    new: `HYGEN_TMPLS=${path.resolve(__dirname, "./templates")} hygen lib new`,
    add: `HYGEN_TMPLS=${path.resolve(__dirname, "./templates")} hygen lib add`,
    build: "lerna run clean && lerna run build && lerna run build:cjs",
    lint: "lerna run lint",
    test: "lerna run test",
    commit: `${path.resolve(__dirname, "./commit.js")}`,
    version:
      "GH_TOKEN=$GHT lerna version --conventional-commits --create-release github",
    "version:pre": 'nps "version --conventional-prerelease"',
    "version:grad": 'nps "version --conventional-graduate"',
    publish: "lerna publish from-git",
    prepare: "nps build",
  },
};
