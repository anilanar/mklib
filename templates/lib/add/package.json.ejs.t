---
to: <%- packageDir %>/package.json
---
{
  "name": "<%- name %>",
  "version": "0.0.0",
  "main": "dist/cjs/index.js",
  "module": "dist/es/index.js",
  "types": "dist/es/index.d.ts",
  "sideEffects": false,
  "homepage": "<%- rootPkg.homepage %>",
  "repository": {
    "type": "git",
    "url": "<%- rootPkg.repository %>",
    "directory": "<%- packageDir %>"
  },
  "author": "<%- rootPkg.author %>",
  "license": "MIT",
  "files": [
    "dist/es",
    "dist/cjs"
  ],
  "scripts": {
    "build": "mklib tsc",
    "build:cjs": "mklib tsc -b tsconfig.cjs.json",
    "clean": "rm -rf dist",
    "lint": "mklib eslint src --ext .ts",
    "test": "mklib jest"
  },
  "publishConfig": {
    "access": "<%- private ? 'restricted' : 'public' %>"
  }
}
