import React from "react";
import { render, screen } from "@testing-library/react";
import DataObject_1 from ".";

test("Displays correct location name and closing time", async () => {
  const location = {
    id: 1,
    name: "Test Location",
    closing: "18:00",
  };
  render(<DataObject_1 location={location} />);
  const nameElement = await screen.findByText(/Test Location/i);
  const closingTimeElement = await screen.findByText("18:00");
  expect(nameElement).toBeInTheDocument();
  expect(closingTimeElement).toBeInTheDocument();
});

test("Displays the correct locked time", async () => {
  const location = {
    id: 1,
    name: "Test Location",
    closing: "18:00",
  };
});
