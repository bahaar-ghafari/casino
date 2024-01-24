import React from "react";
import { HeaderProps } from "./@types";
import {
  HeaderContainer,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  SearchContainer,
  SearchInput,
} from "./Header.style";
import SearchIconSVG from "Shared/SVGs/SearchIconSVG";
import Button from "Shared/Button/Button";
import ChevronIcon from "Shared/SVGs/ChevronIvon";

export const Header: React.FC<HeaderProps> = ({
  user = {
    name: "Rebecka Awesome",
    avatar: "images/avatar/rebecka.jpg",
    event: "Last seen gambling on Starburst.",
    password: "secret",
  },
}) => {
  return (
    <HeaderContainer>
      <div>
        <ProfileContainer>
          <ProfileImage>
            <img src={user?.avatar} alt={user?.name} />
          </ProfileImage>

          <ProfileInfo>
            <div>{user?.name}</div>
            <div>{user?.event}</div>
          </ProfileInfo>
        </ProfileContainer>
        <Button>
          <ChevronIcon direction='left' /> Log Out
        </Button>
      </div>
      <SearchContainer>
        <SearchIconSVG />
        <SearchInput type="text" placeholder="Search Game" />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
