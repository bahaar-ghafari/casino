import React from "react";
import Button from "Shared/Button/Button";
import ChevronIcon from "Shared/icons/ChevronIcon";
import { ProfileContainer, ProfileImage, ProfileInfo } from "./Profile.style";
import { useAuthStore } from "stores/authStore";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "Constants/routes";

const Profile: React.FC = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const user = useAuthStore().user;

  const handleLogout = async () => {
    if (user) {
      const result = await logout(user?.username);
      if (result.status === "success") navigate(RoutePaths.Login);
    }
  };
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
      <Button onClick={() => handleLogout()}>
        <ChevronIcon direction="left" />
        Log Out
      </Button>
    </div>
  );
};

export default Profile;
