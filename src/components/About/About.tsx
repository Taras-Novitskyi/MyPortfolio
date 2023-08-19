import React from "react";

import { Container } from "../Container/Container";
import { AboutContainer } from "./About.styled";

export const About: React.FC = () => {
  return (
    <Container>
      <AboutContainer>
        <div>The information about me will be available here very soon.</div>
      </AboutContainer>
    </Container>
  );
};
