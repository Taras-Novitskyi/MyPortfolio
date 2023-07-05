import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;

  height: ${(p) => p.theme.space(16)};
`;

export const TextWrapper = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.lightBgColor};
`;
