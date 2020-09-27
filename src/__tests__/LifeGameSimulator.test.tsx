import React from "react";
import { render } from "@testing-library/react";
import { LifeGameSimulator } from "../LifeGameSimulator";

test("renders learn react link", () => {
  const { getByText } = render(<LifeGameSimulator />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
