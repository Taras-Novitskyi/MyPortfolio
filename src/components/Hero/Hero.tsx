import React, { useState, useCallback } from "react";

import avatar from "../../images/IMG_3207.jpg";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import {
  Bg,
  Content,
  Photo,
  Introduction,
  Title,
  Suptitle,
} from "./Hero.styled";

export const Hero: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const onClose = useCallback(() => {
    setIsShow(false);
  }, []);

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
            <Button
              type="button"
              onClick={() => {
                setIsShow(true);
              }}
            >
              Request a project
            </Button>
          </Introduction>
          <Photo>
            <img src={avatar} alt="Taras" width={343} height={343} />
          </Photo>
        </Content>
      </Container>
      {isShow && <Modal closeModal={onClose} />}
    </Bg>
  );
};
