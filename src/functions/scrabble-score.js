const pointScheme = {
  AEIOULNRST: 1,
  DG: 2,
  BCMP: 3,
  FHVWY: 4,
  K: 5,
  JX: 8,
  QZ: 10
};

const points = {};
Object.keys(pointScheme).forEach(key =>
  [...key].forEach(letter => (points[letter] = pointScheme[key]))
);

export const scrabbleScore = word => {
  if (/[^a-zA-Z]/.test(word)) throw new Error("Invalid characters given.");
  const letters = [...word.toUpperCase()];
  const scores = letters.map(l => points[l]);
  const score = scores.reduce((a, b) => a + b);
  return score;
};
