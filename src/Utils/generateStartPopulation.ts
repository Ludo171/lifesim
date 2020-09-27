export const generateStartPopulation = (
  population: number,
  nRows: number,
  nCols: number
): Array<Array<number>> => {
  const startPop = Array.from(Array(nRows), (_) => Array(nCols).fill(0));

  // Add lively squares 2x2 on the grid
  for (let i = 0; i < population; i += 1) {
    const newLifeX = Math.round(Math.random() * (nCols - 1));
    const newLifeY = Math.round(Math.random() * (nRows - 1));
    startPop[newLifeY][newLifeX] = 1;
  }
  return startPop;
};
