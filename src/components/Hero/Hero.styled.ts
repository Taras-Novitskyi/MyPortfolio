import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BG from "../../images/bg.webp";

export const Bg = styled.div`
  padding-top: 100px;
  min-height: 100vh;

  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;

  margin-top: 100px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex; */
  }
`;

export const Introduction = styled.div`
  /* text-align: center; */

  @media screen and (min-width: 768px) {
    text-align: right;
  }
`;

export const Suptitle = styled.span`
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
`;

export const Title = styled.h1`
  margin-bottom: 50px;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const Photo = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* overflow: hidden; */

  box-shadow: 4px 4px 24px 4px rgba(66, 68, 90, 1);
`;
