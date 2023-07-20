import React from "react";

import avatar from "../../images/IMG_3207.jpg";
import { Button } from "../Button/Button";
import { Container, Title, Subtitle } from "./WorkItem.styled";

export const WorkItem: React.FC = () => {
  return (
    <Container>
      <Title>Work1</Title>
      <Subtitle>
        Work1 description
      </Subtitle>
    </Container>
  );
};
