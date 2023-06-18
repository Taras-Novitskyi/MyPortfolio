import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BG from "../../images/bg.webp";

export const BgContainer = styled.div`
  padding-top: 100px;

  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
