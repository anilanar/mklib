---
to: <%- packageDir %>/tsconfig.json
---
{
  "extends": "../../config/tsconfig.es.json",
  "include": ["src/**/*.ts"],
  "compilerOptions": {
    "outDir": "dist/es",
    "rootDir": "src"
  }
}
