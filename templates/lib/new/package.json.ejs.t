---
to: <%= name %>/package.json
sh: cd <%= name %> && yarn
---
{
  "name": "<%= name %>",
  "homepage": "https://github.com/<%= github %>",
  "repository": "github:<%= github %>",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
  },
  "devDependencies": {
    "mklib": "<%= mklib.version %>"
  }
}
