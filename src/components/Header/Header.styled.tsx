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
`;

export const StyledNav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 30px;
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
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

  font-family: "Kaushan Script", cursive;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #53336e;
`;

export const StyledBurger = styled.button`
  display: flex;
  align-items: center;
  margin-left: 28px;

  color: #a6a9b3;
  border-style: none;
  background-color: transparent;

  transition: color 0.25s ease-out;

  @media screen and (min-width: 768px) {
    margin-left: 54px;
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }

  &:hover,
  :focus {
    color: #e4e6f0;
  }
`;
