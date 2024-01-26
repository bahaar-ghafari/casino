import styled from "styled-components";

export const NavbarContainer = styled.nav`
  overflow: hidden;
  & > div {
    padding: 1.2rem 0;
    & > b {
      font-size: 1rem;
    }
    & > div {
      margin-top: 1rem;
    }
  }
`;

export const NavbarIcon = styled.a`
  cursor: pointer;
  float: right;
  padding: 14px 16px;
  font-size: 1.5rem;
`;
