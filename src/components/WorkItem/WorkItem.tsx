import React from "react";

import avatar from "../../images/IMG_3207.jpg";
import { Button } from "../Button/Button";
import { Container, Title, Subtitle } from "./WorkItem.styled";

type ProjectType = {
  id: string;
  baner: string;
  title: string;
  overview: string;
  technology: string[];
};

type Props = {
  project: ProjectType;
};

export const WorkItem: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title>{props.project.title}</Title>
      <Subtitle>{props.project.overview}</Subtitle>
    </Container>
  );
};
