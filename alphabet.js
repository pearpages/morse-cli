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

function getInverse() {
  const res = [];
  letters.forEach(letter => {
    const index = Object.keys(letter)[0];
    res.push({ [letter[index].pattern]: pattern(index) });
  });
  return res;
}

module.exports = letters.concat(getInverse());
