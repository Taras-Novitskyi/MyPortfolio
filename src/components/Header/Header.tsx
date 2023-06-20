import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../Button/Button";

import { Container } from "../Container/Container";
import {
  StyledHeader,
  StyledLink,
  HeaderWrapper,
  StyledNav,
  Logo,
  MenuContainer,
} from "./Header.styled";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo to="/">TARON.</Logo>
          <MenuContainer>
            <StyledNav>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/work">Work</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </StyledNav>
            <Button type="button">Get in touch</Button>
          </MenuContainer>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
