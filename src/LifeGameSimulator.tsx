import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Buttons/Button";
import GridCanvas from "./GridCanvas/GridCanvas";
import Header from "./Header/Header";
import { computeNextStep } from "./Utils/computeNextStep";
import { generateStartPopulation } from "./Utils/generateStartPopulation";
import { useStartStopSimulation } from "./Utils/useStartStopSimulation";

const StyledPageBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: radial-gradient(at bottom left, #a534e7a8, transparent 400px),
    radial-gradient(at bottom right, #a534e7a8, transparent 400px);
`;

const StyledButtonsBar = styled.div`
  height: 200px;
  background-color: #aaaaaa55;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledCountDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  span {
    font-size: x-large;
    color: black;
  }
`;

export const LifeGameSimulator: React.FC<{}> = () => {
  const PARAMS = {
    startPopulation: 320,
    nRows: 40,
    nCols: 80,
    stepInterval: 200,
  };

  const [cells, setCells] = useState(
    generateStartPopulation(PARAMS.startPopulation, PARAMS.nRows, PARAMS.nCols)
  );

  const [isRunning, setIsRunning] = useState(false);
  const [countSteps, setCountSteps] = useState(0);

  useStartStopSimulation(
    PARAMS.stepInterval,
    isRunning,
    setCells,
    setCountSteps
  );

  return (
    <StyledPageBackground className="MainApp">
      <Header title="Life Game Simulator" />

      <GridCanvas cellsStates={cells} />

      <StyledCountDisplay>
        <span>Generation # {countSteps}</span>
      </StyledCountDisplay>

      <StyledButtonsBar>
        <Button
          label="New Population"
          isDisabled={false}
          onClick={() => {
            setCells(
              generateStartPopulation(
                PARAMS.startPopulation,
                PARAMS.nRows,
                PARAMS.nCols
              )
            );
            console.log("New Pop !");
          }}
        />
        <Button
          label="Start & Stop"
          isDisabled={false}
          onClick={() => {
            console.log("Click Start Stop");
            setIsRunning(!isRunning);
          }}
        />
        <Button
          label="Next Step"
          isDisabled={false}
          onClick={() => {
            console.log("Click Next Step");
            setCells(computeNextStep(cells));
          }}
        />
      </StyledButtonsBar>
    </StyledPageBackground>
  );
};
