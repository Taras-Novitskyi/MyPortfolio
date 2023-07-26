import React, { useState, useEffect } from "react";
import axios from "axios";

import myWorksData from "../../data/myWorks.json";
import avatar from "../../images/IMG_3207.jpg";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { WorkItem } from "../WorkItem/WorkItem";
import { Title, Subtitle, WorkList, Item } from "./Works.styled";

interface IProject {
  id: string;
  baner: string;
  title: string;
  overview: string;
  technology: string[];
}

export const Works: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects(myWorksData);
  }, []);

  return (
    <Container>
      <Title>Work</Title>
      <Subtitle>
        Take a look at my latest projects and see how I can help bring your
        vision to life.
      </Subtitle>
      <WorkList>
        {projects.map((project: IProject) => (
          <Item key={project.id}>
            <WorkItem project={project} />
          </Item>
        ))}
      </WorkList>
    </Container>
  );
};
