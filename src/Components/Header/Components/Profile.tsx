import React from "react";
import Button from "Shared/Button/Button";
import ChevronIcon from "Shared/SVGs/ChevronIvon";
import { ProfileContainer, ProfileImage, ProfileInfo } from "./Profile.style";

export const Profile: React.FC = () => {
    const user = {
        name: "Rebecka Awesome",
        avatar: "images/avatar/rebecka.jpg",
        event: "Last seen gambling on Starburst.",
        password: "secret",
      }
  return (
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
        <ChevronIcon direction="left" /> Log Out
      </Button>
    </div>
  );
};

export default Profile;
