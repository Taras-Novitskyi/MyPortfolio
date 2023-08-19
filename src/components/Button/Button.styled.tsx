import styled from "styled-components";

export const Btn = styled.button`
  width: 160px;
  height: 40px;

  color: ${(p) => p.theme.colors.secondAccentColor};
  background-color: #21242b;
  border: 1px solid ${(p) => p.theme.colors.secondAccentColor};
  border-radius: 4px;

  transition: all 0.25s ease-out;

  &:hover {
    color: ${(p) => p.theme.colors.hoverLight};
    border: 1px solid ${(p) => p.theme.colors.hoverLight};
  }
`;
