import React from "react";
import SearchBar from "../Components/SearchBar";
import Profile from "../Components/Profile";
import { HeaderContainer } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Profile />
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
