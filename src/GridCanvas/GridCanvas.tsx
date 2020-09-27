import React from "react";
import styled from "styled-components";
import { useGridCanvas } from "./useGridCanvas";

const StyledGridCanvas = styled.div`
  font-weight: bold;
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: xxx-large;
`;

interface IProps {
  cellsStates: Array<Array<number>>;
}

const GridCanvas: React.FC<IProps> = ({ cellsStates }: IProps) => {
  const { canvasRef } = useGridCanvas(cellsStates);

  return (
    <StyledGridCanvas>
      <canvas
        style={{
          borderColor: "red",
          backgroundColor: "black",
          width: "80%",
          maxWidth: "1000px",
        }}
        ref={canvasRef}
      />
    </StyledGridCanvas>
  );
};

export default GridCanvas;
