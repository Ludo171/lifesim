import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: x-large;
  border-color: #0000ff;
  padding: 15px;
  border-radius: 10px;
  outline: none;
  &:hover {
    background-color: #0000ff;
    color: white;
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: white;
    border-color: #5555aa;
  }
`;

interface IProps {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ label, isDisabled, onClick }: IProps) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
