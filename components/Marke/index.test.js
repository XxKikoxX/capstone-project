import { render } from "@testing-library/react";
import Marke from "./index";

describe("Marke component", () => {
  it("renders the correct location data", () => {
    const location = { id: "567139", userName: "Koriath", name: "Musiktheater Piano" };
    const { getByText } = render(<Marke location={location} />);
    expect(getByText("567139")).toBeInTheDocument();
    expect(getByText("Koriath")).toBeInTheDocument();
    expect(getByText("Musiktheater Piano")).toBeInTheDocument();
  });
});
