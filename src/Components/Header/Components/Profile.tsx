import React from "react";
import Button from "Shared/Button/Button";
import ChevronIcon from "Shared/SVGs/ChevronIvon";
import { ProfileContainer, ProfileImage, ProfileInfo } from "./Profile.style";
import { useAuthStore } from "stores/authStore";

export const Profile: React.FC = () => {
  const user = {
    name: "Rebecka Awesome",
    avatar: "images/avatar/rebecka.jpg",
    event: "Last seen gambling on Starburst.",
    password: "secret",
  };
  const userName = "rebeca";
  const { isLoggedIn, logout } = useAuthStore();
  const handleAuth = () => {
    if (isLoggedIn) {
      logout(userName);
    } else {
      //go to login page
    }
  };
  return (
    <div>
      <ProfileContainer>
        {isLoggedIn && (
          <>
            <ProfileImage>
              <img src={user?.avatar} alt={user?.name} />
            </ProfileImage>

            <ProfileInfo>
              <div>{user?.name}</div>
              <div>{user?.event}</div>
            </ProfileInfo>
          </>
        )}
      </ProfileContainer>
      <Button onClick={() => handleAuth()}>
        <ChevronIcon direction="left" /> {isLoggedIn ? "Log Out" : "Log In"}
      </Button>
    </div>
  );
};

export default Profile;
