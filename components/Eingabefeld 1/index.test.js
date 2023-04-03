import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";
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
  /*  it("displays the locked time correctly", () => {
    const now = moment();
    const lockedTime = now.set().format("HH:mm");

    const { getByText } = render(<InformationPage />);
    expect(getByText(lockedTime)).toBeInTheDocument();
  }); */

  it("displays the location closing time correctly", () => {
    const { getByText } = render(<InformationPage />);
    expect(getByText(locations.closing)).toBeInTheDocument();
  });

  it("displays the location name correctly", () => {
    const { getByText } = render(<InformationPage />);
    expect(getByText(locations.name)).toBeInTheDocument();
  });

  it("displays the correct text for clothing deposit", () => {
    const { getByText } = render(<InformationPage />);
    expect(getByText("Kleidung hinterlegt")).toBeInTheDocument();
  });
});
