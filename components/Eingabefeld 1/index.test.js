import React from "react";
import { getByText, screen, render } from "@testing-library/react";
import InformationPage from ".";

const locations = [
  {
    id: "567139",
    name: "Musiktheater Piano",
    stadt: "Dortmund",
    closing: "18:00 Uhr",
    userName: "Koriath",
  },
];

describe("InformationPage", () => {
  test("displays the location closing time correctly", () => {
    render(<InformationPage location={locations} />);
    expect(screen.getByText(locations[0].closing)).toBeInTheDocument();
  });

  test("displays the location name correctly", () => {
    render(<InformationPage />);
    expect(screen.getByText(locations[0].name)).toBeInTheDocument();
  });

  test("displays the correct text for clothing deposit", () => {
    render(<InformationPage location={locations} />);
    expect(screen.getByText("Kleidung hinterlegt")).toBeInTheDocument();
  });
});
