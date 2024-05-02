

const x = import.meta.resolve("commitizen/package.json")

const y = new URL(x);

console.log(y.pathname);