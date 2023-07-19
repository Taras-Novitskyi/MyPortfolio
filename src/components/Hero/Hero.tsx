import React from "react";

import avatar from "../../images/IMG_3207.jpg";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import {
  Bg,
  Content,
  Photo,
  Introduction,
  Title,
  Suptitle,
} from "./Hero.styled";

export const Hero: React.FC = () => {
  return (
    <Bg>
      <Container>
        <Content>
          <Introduction>
            <Suptitle>Hi there, I'm Taras.</Suptitle>
            <Title>
              Skilled and innovative IT developer dedicated to delivering
              efficient software solutions, leveraging cutting-edge technologies
              and fostering collaboration for success.
            </Title>
            <Button type="button">Request a project</Button>
          </Introduction>
          <Photo>
            <img src={avatar} alt="Taras" width={343} height={343} />
          </Photo>
        </Content>
      </Container>
    </Bg>
  );
};
