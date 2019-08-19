const prompt = require("prompt");

const shuffle = require("./shuffle");
const morseSet = require("./alphabet");

const main = () => {
  shuffle(morseSet);

  const schema = {
    properties: {}
  };

  morseSet.forEach(l => (schema.properties = { ...schema.properties, ...l }));

  prompt.start();
  prompt.get(schema, (_, res) => {
    console.log("Keep practicing!");
  });
};

main();
