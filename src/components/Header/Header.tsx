import React from "react";
import { useLocation } from "react-router-dom";

import { Container } from "../Container/Container";
import {
  StyledHeader,
  StyledLink,
  HeaderWrapper,
  StyledNav,
  Logo,
} from "./Header.styled";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo>TARON.</Logo>
          <StyledNav>
            {/* <StyledLink to="/"></StyledLink> */}
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/work">Work</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </StyledNav>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
