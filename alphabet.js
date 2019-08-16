const pattern = value => ({ pattern: value });

const letters = [
  {
    a: pattern(".-")
  },
  {
    b: pattern("-...")
  },
  {
    c: pattern("-.-.")
  },
  {
    d: pattern("-..")
  },
  {
    e: pattern(".")
  },
  {
    f: pattern("..-.")
  },
  {
    g: pattern("--.")
  }
];

const inverse = [
  {
    ".-": pattern("a")
  },
  {
    "-...": pattern("b")
  },
  {
    "-.-.": pattern("c")
  },
  {
    "-..": pattern("d")
  },
  {
    ".": pattern("e")
  },
  {
    "..-.": pattern("f")
  },
  {
    "--.": pattern("g")
  }
];

module.exports = { letters, inverse };
