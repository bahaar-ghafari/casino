// Header.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers
import Header from "../Container/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  it("renders Header component correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Test that the text inside the SearchBar component is rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
