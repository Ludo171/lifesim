import { useRef, useEffect } from "react";

const drawGrid = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  cells: Array<Array<number>>
): void => {
  const canvas = canvasRef.current;
  if (!canvas) {
    console.error("No Ref to Canvas yet ...");
    return;
  }

  const ctx = canvas.getContext("2d");
  if (ctx) {
    const nRows = cells.length;
    const nCols = cells[0].length;
    const cellSize = Math.ceil(canvas.width / nCols);
    canvas.height = cellSize * nRows;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nRows; i += 1) {
      for (let j = 0; j < nCols; j += 1) {
        if (cells[i][j] === 1) {
          ctx.fillStyle = "white";
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }
  }
  return;
};

export const useGridCanvas = (cellsStates: Array<Array<number>>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawGrid(canvasRef, cellsStates);
  }, [cellsStates]);

  return { canvasRef };
};
