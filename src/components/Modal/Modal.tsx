import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";

import {
  Backdrop,
  Title,
  CloseBtn,
  ModalBox,
  Form,
  Input,
  Textarea,
  Label,
} from "./Modal.styled";

type Props = {
  closeModal: () => void;
};

type TooltipRefType = {
  current: HTMLElement | null;
};

export const Modal: React.FC<Props> = (props) => {
  const tooltipRef: any = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (tooltipRef?.current && !tooltipRef.current.contains(e.target)) {
        props.closeModal();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        props.closeModal();
      }
    };

    const bodyElement = document.querySelector("body")!;

    document.addEventListener("keydown", handleKeyDown)!;
    document.addEventListener("click", handleClick, true)!;

    return () => {
      document.removeEventListener("keydown", handleKeyDown)!;
      document.removeEventListener("click", handleClick, true)!;
      bodyElement.style.overflow = "auto";
    };
  }, [props]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.closeModal();
  };

  return ReactDOM.createPortal(
    <>
      <Backdrop>
        <ModalBox ref={tooltipRef}>
          <Title>Let’s get in touch.</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name"></Label>
            <Input id="name" type="text" placeholder="Your Name" required />
            <Label htmlFor="email"></Label>
            <Input id="email" type="email" placeholder="Your Email" required />
            <Label htmlFor="message"></Label>
            <Textarea id="message" placeholder="Your Message" required />
            <Button>Send message</Button>
          </Form>
          <CloseBtn onClick={props.closeModal} />
        </ModalBox>
      </Backdrop>
    </>,
    document.querySelector("#modal-root")!
  );
};
