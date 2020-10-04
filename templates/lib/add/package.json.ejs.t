---
to: <%= root %>/package.json
---
{
  "name": "<%= name %>",
  "version": "0.0.0",
  "main": "dist/cjs/index.js",
  "module": "dist/es/index.js",
  "types": "dist/es/index.d.ts",
  "sideEffects": false,
  "homepage": "<%= pkg.homepage %>",
  "repository": {
    "type": "git",
    "url": "<%= pkg.repository %>",
    "directory": "<%= root %>"
  },
  "author": "<%= pkg.author %>",
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
    "access": "<%= private ? 'restricted' : 'public' %>"
  }
}
