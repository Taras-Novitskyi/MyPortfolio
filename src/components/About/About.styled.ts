import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(p) => p.theme.space(30)};
`;
