/* import React from "react";
import { render, screen } from "@testing-library/react";
import Information from ".";

test("displays correct location name and closing time", () => {
  const location = {
    id: 1,
    name: "Test Location",
    closing: "18:00",
  };
  render(<Information location={location} />);
  const nameElement = screen.getByText(/Test Location/i);
  const closingTimeElement = screen.getByText("18:00");
  expect(nameElement).toBeInTheDocument();
  expect(closingTimeElement).toBeInTheDocument();
});
 */