---
to: <%= root %>/tsconfig.json
---
{
  "extends": "../../config/tsconfig.es.json",
  "files": ["src/index.ts"],
  "compilerOptions": {
    "outDir": "dist/es",
    "rootDir": "src"
  }
}
