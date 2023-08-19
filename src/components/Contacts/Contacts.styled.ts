import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 120px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin-top: 160px;
  }
`;

export const Title = styled.h2`
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-size: 24px;
  line-height: 2;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;
