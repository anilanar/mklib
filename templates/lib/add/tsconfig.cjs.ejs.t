---
to: <%= root %>/tsconfig.cjs.json
---
{
  "extends": "../../config/tsconfig.cjs.json",
  "files": ["src/index.ts"],
  "compilerOptions": {
    "outDir": "dist/cjs",
    "rootDir": "src"
  }
}