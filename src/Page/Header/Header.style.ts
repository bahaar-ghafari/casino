import theme from "Styles/Theme";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  color: #000;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0.75em;
  border: 1px solid #ccc;
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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  & > svg {
    margin-left: 1em;
  }
`;

export const SearchInput = styled.input`
  border: none;
  padding: 8px;
  border-radius: 100%;
  outline: none;
`;
