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
  gap: 30px;
`;

export const Photo = styled.div``;
