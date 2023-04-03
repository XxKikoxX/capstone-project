import React from "react";
import { screen, getByText, render } from "@testing-library/react";
import moment from "moment";
import InformationPage from ".";
/* import { locations } from "../../db/data"; */

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
  /*  test("displays the locked time correctly", () => {
    const now = moment();
    const lockedTime = now.set().format("HH:mm");

    render(<InformationPage />);
    expect(screen.getByText(lockedTime)).toBeInTheDocument();
  }); */

  test("displays the location closing time correctly", () => {
    render(<InformationPage />);
    expect(screen.getByText(locations[0].closing)).toBeInTheDocument();
  });

  test("displays the location name correctly", () => {
    render(<InformationPage />);
    expect(screen.getByText(locations[0].name)).toBeInTheDocument();
  });

  test("displays the correct text for clothing deposit", () => {
    render(<InformationPage />);
    expect(screen.getByText("Kleidung hinterlegt")).toBeInTheDocument();
  });
});
