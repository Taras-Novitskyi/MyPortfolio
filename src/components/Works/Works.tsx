import React from "react";

import myWorks from "../../myWorks.json";
import avatar from "../../images/IMG_3207.jpg";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { WorkItem } from "../WorkItem/WorkItem";
import { Title, Subtitle, WorkList } from "./Works.styled";

type WorkType = {
  id: string;
  baner: string;
  title: string;
  Overview: string;
  technology: string[];
};

type Props = {
  work: WorkType;
};

// console.log(myWorks);
  
const Works: React.FC = () => {
  const works = JSON.parse(myWorks);

  return (
    <Container>
      <Title>Work</Title>
      <Subtitle>
        Take a look at my latest projects and see how I can help bring your
        vision to life.
      </Subtitle>
      <WorkList>
        {works.map((work: WorkType) => (
          <WorkItem work={work} />
        ))}
      </WorkList>
    </Container>
  );
};

export default Works;
