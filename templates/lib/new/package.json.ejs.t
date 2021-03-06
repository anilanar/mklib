---
to: <%- name %>/package.json
sh: cd <%- name %> && yarn
---
{
  "name": "<%- name %>",
  "homepage": "<%- homepage %>",
  "repository": "<%- repository %>",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
    "prepare": "mklib prepare"
  },
  "devDependencies": {
    "<%- mklib.name %>": "^<%- mklib.version %>"
  }
}
