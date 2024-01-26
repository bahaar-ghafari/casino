import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "../Components/SearchBar";

describe("SearchBar Component", () => {
  it("should update searchQuery on input change", () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId("search-input");

    // Simulate user typing in the input
    fireEvent.change(searchInput, { target: { value: "newSearchValue" } });
  });
});
