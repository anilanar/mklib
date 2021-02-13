---
to: <%- packageDir %>/tsconfig.cjs.json
---
{
  "extends": "../../config/tsconfig.cjs.json",
  "include": ["src/**/*.ts"],
  "compilerOptions": {
    "outDir": "dist/cjs",
    "rootDir": "src"
  }
}