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
    "directory": "<%- subdir %>"
  },
  "author": "<%- rootPkg.author %>",
  "license": "MIT",
  "files": [
    "dist/es",
    "dist/cjs"
  ],
  "scripts": {
    "build": "tsc",
    "build:cjs": "tsc -b tsconfig.cjs.json",
    "clean": "rm -rf dist",
    "lint": "eslint src --ext .ts",
    "test": "jest"
  },
  "publishConfig": {
    "access": "<%- private ? 'restricted' : 'public' %>"
  }
}
