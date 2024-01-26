import React, { useState } from "react";
import { NavbarContainer, NavbarIcon } from "./Navbar.style";
import GameFilter from "../GameFilter";
import SearchBar from "Components/Header/Components/SearchBar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavbarIcon onClick={toggleNavbar}>&#9776;</NavbarIcon>
      {isMenuOpen && (
        <div>
          <SearchBar />
          <NavbarContainer>
            <GameFilter />
          </NavbarContainer>
        </div>
      )}
    </>
  );
};

export default Navbar;
