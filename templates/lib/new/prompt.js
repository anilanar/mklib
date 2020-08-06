const path = require("path");

module.exports = {
  prompt: async ({ prompter, args }) => {
    const result = await prompter.prompt([
      {
        type: "input",
        name: "name",
        message: "Name",
        initial: args.name,
        skip: Boolean(args.name),
      },
      {
        type: "input",
        name: "github",
        message: "Github repo",
        initial: "example/repo",
        skip: Boolean(args.github),
      },
    ]);
    return {
      ...result,
      homepage: `https://github.com/${result.github}`,
      repository: `https://github.com/${result.github}.git`,
    };
  },
};
