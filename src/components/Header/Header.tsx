import React from "react";
import { useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import {
  StyledHeader,
  StyledLink,
  HeaderWrapper,
  StyledNav,
  Logo,
  MenuContainer,
  StyledBurger,
} from "./Header.styled";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo to="/">TAOL.</Logo>
          <MenuContainer>
            <StyledNav>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/work">Work</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
              <Button type="button">Get in touch</Button>
            </StyledNav>

            <StyledBurger
              onClick={() => {
                // setModalActive(true);
              }}
            >
              <RxHamburgerMenu
                style={{ width: "32px", height: "32px", color: "inheared" }}
              />
            </StyledBurger>
          </MenuContainer>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
