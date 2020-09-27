import { useEffect } from "react";
import { computeNextStep } from "./computeNextStep";

export const useStartStopSimulation = (
  stepInterval: number,
  isRunning: boolean,
  setCells: React.Dispatch<React.SetStateAction<number[][]>>,
  setCountSteps: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    console.log(`ìsRunning: ${isRunning}`);
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      setCountSteps((count) => count + 1);
      setCells(computeNextStep);
    }, stepInterval);
    return () => clearInterval(interval);
  }, [isRunning]);
};
