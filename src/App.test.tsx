import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders a heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      name: "Folder Structure Maker",
    });
    expect(heading).toBeInTheDocument();
  });
});
