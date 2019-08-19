const pattern = value => ({ pattern: value, message: value, required: true });

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
  },
  {
    h: pattern("....")
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
  },
  {
    "....": pattern("h")
  }
];

module.exports = { letters, inverse };
