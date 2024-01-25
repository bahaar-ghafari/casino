import React from "react";
import SearchIconSVG from "Shared/SVGs/SearchIconSVG";
import { SearchContainer, SearchInput } from "./SearchBar.style";
import useGamesStore from "stores/gamesStore";

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useGamesStore();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search Game"
        value={searchQuery}
        onChange={handleSearch}
      />
      <SearchIconSVG />
    </SearchContainer>
  );
};

export default SearchBar;
