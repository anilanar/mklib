const p = require("path");
const { execaCommandSync } = require('execa')

const new_ = `HYGEN_TMPLS=${path("./templates")} ${bin(
  "hygen"
)} lib new`;

const add = `HYGEN_TMPLS=${path("./templates")} ${bin(
  "hygen"
)} lib add`;

const build = `${bin(
  "lerna"
)} run clean && lerna run build && lerna run build:cjs`;

const lint = `${bin("lerna")} run lint`;

const test = `${bin("lerna")} run test`;

const commit = `${path("./commit.js")}`;

const version = `GH_TOKEN=$GHT ${bin(
  "lerna"
)} version --conventional-commits --create-release github`;

const version_pre = `${version} --conventional-prerelease`;

const version_grad = `${version} --conventional-graduate`;

const publish = `${bin("lerna")} publish from-git`;

const prepare = build;

module.exports = {
  scripts: {
    new: new_,
    add,
    build,
    lint,
    test,
    commit,
    version,
    "version:pre": version_pre,
    "version:grad": version_grad,
    publish,
    prepare,
  },
};

function bin(name) {
  return execaCommandSync(`npx which ${name}`, {
    cwd: path("."),
  })
}

function path(...paths) {
  return p.resolve(__dirname, ...paths);
}
