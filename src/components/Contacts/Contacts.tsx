import React, { useState, useCallback } from "react";

import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Social } from "../Social/Social";
import { Content, Title } from "./Contacts.styled";

export const Contacts: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const onClose = useCallback(() => {
    setIsShow(false);
  }, []);

  return (
    <Container>
      <Content>
        <Title>Find me on:</Title>
        <Social />
        <Title>or</Title>
        <Title>feel free to ask me right here</Title>
        <Button
          type="button"
          onClick={() => {
            setIsShow(true);
          }}
        >
          Let's talk
        </Button>
      </Content>
      {isShow && <Modal closeModal={onClose} />}
    </Container>
  );
};
