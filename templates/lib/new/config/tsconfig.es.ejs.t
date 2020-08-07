---
to: <%- name %>/config/tsconfig.cjs.json
---
{
  "extends": "./tsconfig.es.json",
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "composite": false,
    "declaration": false
  }
}