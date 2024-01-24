import theme from "Styles/Theme";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0.75em;
  border: 1px solid ${theme.gray};
  border-radius: 100%;

  & > img {
    border-radius: 100%;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
`;
