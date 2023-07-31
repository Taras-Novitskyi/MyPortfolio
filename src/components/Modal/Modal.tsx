import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

import {
  Backdrop,
  Message,
  CloseBtn,
  ModalBox,
  MessageBox,
} from "./Modal.styled";

type Props = {
  onClose: () => void;
};

type TooltipRefType = {
  current: HTMLElement | null;
};

export const Modal: React.FC<Props> = (props) => {
  const tooltipRef: any = useRef(null);

  const closeModal = useCallback(() => {
    props.onClose();
  }, [props]);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (tooltipRef?.current && !tooltipRef.current.contains(e.target)) {
        closeModal();
      }
    };

    const handleKeyDown = (e: any) => {
      if (e.code === "Escape") {
        closeModal();
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
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>
      <Backdrop>
        <ModalBox ref={tooltipRef}>
          <MessageBox>
            <Message>
              Let’s get in touch.
            </Message>
            <CloseBtn onClick={closeModal} />
          </MessageBox>
        </ModalBox>
      </Backdrop>
    </>,
    document.querySelector("#modal-root")!
  );
};
