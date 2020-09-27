import React, { useRef } from "react";
import styled from "styled-components";

const StyledGridCanvas = styled.div`
  font-weight: bold;
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: xxx-large;
`;

interface IProps {}

const GridCanvas: React.FC<IProps> = ({}: IProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

GridCanvas.defaultProps = {};

export default GridCanvas;
