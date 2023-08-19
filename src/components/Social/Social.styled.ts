import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SocialContainer = styled.div`
  margin-bottom: ${(p) => p.theme.space(12)};
`;

export const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: ${(p) => p.theme.space(8)};

  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: ${(p) => p.theme.colors.itemTitleColor};

  @media (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.space(10)};
  }
`;

export const SocLinkList = styled.ul`
  display: flex;
  align-items: center;

  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const SocLinkItem = styled.li`
  fill: ${(p) => p.theme.colors.secondAccentColor};
  
  :hover {
    fill: ${(p) => p.theme.colors.firstAccentColor};
  }

  svg {
    fill: inherit;
	transition: ${(p) => p.theme.transitions.main};
  }
`;

export const Link = styled.a`
  display: block;
  width: 36px;
  height: 36px;
`;
