import { computeNextStep } from "../Utils/computeNextStep";
import { generateStartPopulation } from "../Utils/generateStartPopulation";

describe("Simulation Logic Test Suite", () => {
  it("generateStartGrid should generate correct start grid", () => {
    const startPopulation = 20;
    const nRows = 40;
    const nCols = 80;

    const newRandomGrid = generateStartPopulation(
      startPopulation,
      nRows,
      nCols
    );
    expect(newRandomGrid.length).toEqual(nRows);
    expect(newRandomGrid[0].length).toEqual(nCols);

    let totalAliveCells = 0;
    for (let j = 0; j < newRandomGrid.length; j += 1) {
      for (let i = 0; j < newRandomGrid[j].length; i += 1) {
        totalAliveCells += newRandomGrid[j][i];
      }
    }
    expect(totalAliveCells).toBeGreaterThanOrEqual(1);
    expect(totalAliveCells).toBeLessThanOrEqual(startPopulation);
  });

  it("computeNextGridStep should compute next step properly", () => {
    const previousStates = [
      [0, 0, 1, 0, 1],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
    ];

    const computedNextStep = computeNextStep(previousStates);
    const expectedNextStep = [
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ];
    expect(computedNextStep).toEqual(expectedNextStep);
  });
});
