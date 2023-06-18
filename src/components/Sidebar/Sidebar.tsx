import React from "react";

import { Container } from "../Container/Container";
import { BgContainer } from "./Sidebar.styled";

export const Sidebar: React.FC = () => {
  return (
    <BgContainer>
      <Container>Sidebar</Container>
    </BgContainer>
  );
};
