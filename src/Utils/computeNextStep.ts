export const computeNextStep = (
  cellsStates: Array<Array<number>>
): Array<Array<number>> => {
  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const newCellsStates = cellsStates.map((inner) => inner.slice());
  for (let i = 0; i < cellsStates.length; i += 1) {
    for (let j = 0; j < cellsStates[i].length; j += 1) {
      // count alive cells amongst neighbors
      let count = 0;
      neighbors.forEach((n) => {
        if (
          i + n[0] > 0 &&
          i + n[0] < cellsStates.length &&
          j + n[1] > 0 &&
          j + n[1] < cellsStates[0].length
        ) {
          count += cellsStates[i + n[0]][j + n[1]];
        }
      });
      if (cellsStates[i][j] === 0 && count === 3) {
        newCellsStates[i][j] = 1;
      } else if (cellsStates[i][j] === 1 && (count < 2 || count > 3)) {
        newCellsStates[i][j] = 0;
      }
    }
  }
  return newCellsStates;
};
