import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render a heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      name: "Folder Structure Maker",
    });
    expect(heading).toBeInTheDocument();
  });
  // TODO: Add intergration tests
});
