import React from "react";
import SearchIconSVG from "Shared/SVGs/SearchIconSVG";
import { SearchContainer, SearchInput } from "./SearchBar.style";

export const SearchBar: React.FC = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search Game" />
      <SearchIconSVG />
    </SearchContainer>
  );
};

export default SearchBar;
