import React from "react";
import SearchIcon from "Shared/icons/SearchIcon";
import { SearchContainer, SearchInput } from "./SearchBar.style";
import useGamesStore from "stores/gamesStore";

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useGamesStore();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search Game"
        data-testid='search-input'
        value={searchQuery}
        onChange={handleSearch}
      />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBar;
