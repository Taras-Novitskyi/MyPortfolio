import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Search } from "../../images/icons/search.svg";

export const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1;

  background-color: transparent;
`;

export const HeaderWrapper = styled.section`
  display: flex;
  height: 46px;
`;

export const Headerblock = styled.div`
  top: ${(p) => p.theme.space(4.5)};
  right: ${(p) => p.theme.space(4)};

  @media (min-width: 768px) {
    top: ${(p) => p.theme.space(4.5)};
    right: ${(p) => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: ${(p) => p.theme.space(4.5)};
    right: ${(p) => p.theme.space(25)};
  }
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledNav = styled.nav`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
    margin-left: 187px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: "#23262A";
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.active {
    color: #8baa36;
  }

  &:hover,
  :focus {
    color: #8baa36;
  }
`;

export const Logo = styled.div`
  margin-right: 8px;
  height: 24px;
  width: 24px;

  background-color: #8baa36;
`;

export const StyledBurger = styled.button`
  align-items: center;
  border-style: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-style: none;
  background-color: transparent;
  margin-left: 27.5px;

  @media screen and (min-width: 768px) {
    margin-left: 54px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserProfileWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.button`
  display: block;
  padding: 0;
  border-radius: 50%;
  border: solid 1px transparent;
`;

export const AvatarImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  opacity: 0.9;
  &:hover {
    width: 46px;
    height: 46px;
    opacity: 1;
  }
`;

export const UserName = styled.p`
  margin-left: 14px;
  color: ${(p) => p.theme.colors.userNameColor};
`;
