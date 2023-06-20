import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Search } from "../../images/icons/search.svg";

export const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  z-index: 1;

  background-color: transparent;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  /* @media (min-width: 768px) {
    top: ${(p) => p.theme.space(4.5)};
    right: ${(p) => p.theme.space(8)};
  }
  @media (min-width: 1440px) {
    top: ${(p) => p.theme.space(4.5)};
    right: ${(p) => p.theme.space(25)};
  } */
`;

export const StyledNav = styled.nav`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  // flex-direction: row;
  // justify-content: center;
  align-items: center;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #a6a9b3;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #e4e6f0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.active {
    color: #e4e6f0;
  }

  &:hover,
  :focus {
    color: #e4e6f0;
  }
`;

export const Logo = styled(NavLink)`
  height: 24px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: "#23262A";

  // background-color: #8baa36;
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
