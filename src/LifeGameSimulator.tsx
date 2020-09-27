import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Buttons/Button";
import GridCanvas from "./GridCanvas/GridCanvas";
import Header from "./Header/Header";

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
  const [countSteps, setCountSteps] = useState(0);

  return (
    <StyledPageBackground className="MainApp">
      <Header title="Life Game Simulator" />

      <GridCanvas />

      <StyledCountDisplay>
        <span>Generation # {countSteps}</span>
      </StyledCountDisplay>

      <StyledButtonsBar>
        <Button
          label="New Population"
          isDisabled={false}
          onClick={() => console.log("Click New Pop")}
        />
        <Button
          label="Start & Stop"
          isDisabled={false}
          onClick={() => console.log("Click Start Stop")}
        />
        <Button
          label="Next Step"
          isDisabled={false}
          onClick={() => console.log("Click Next Step")}
        />
      </StyledButtonsBar>
    </StyledPageBackground>
  );
};
