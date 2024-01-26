import React from "react";
import SearchBar from "../Components/SearchBar";
import Profile from "../Components/Profile";
import { HeaderContainer } from "./Header.style";
import useIsMobile from "Hooks/useUsMobile";
import Navbar from "Components/Filter/Navbar/Navbar";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <HeaderContainer data-testid="header">
      <Profile />
      {isMobile ? <Navbar /> : <SearchBar />}
    </HeaderContainer>
  );
};

export default Header;
