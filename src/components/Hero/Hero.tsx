import React from "react";

import avatar from "../../images/IMG_3207.jpg";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { Bg, Content, Photo } from "./Hero.styled";

export const Hero: React.FC = () => {
  return (
    <Bg>
      <Container>
        <Content>
          <div>
            <h1>
              Hi there I'm Taras. I build and develop sites for digital
              companies.
            </h1>
            <Button type="button">Request a project</Button>
          </div>
          <Photo>
            <img src={avatar} alt="Taras" sizes="580px" />
          </Photo>
        </Content>
      </Container>
    </Bg>
  );
};
