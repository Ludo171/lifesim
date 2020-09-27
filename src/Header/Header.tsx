import * as React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: bold;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  font-size: xxx-large;
`;

interface IProps {
  title?: string;
}

const Header: React.FC<IProps> = ({ title }: IProps) => (
  <StyledH1>{title}</StyledH1>
);

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
