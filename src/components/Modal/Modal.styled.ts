import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* inset: 0; */
  width: 100%;
  height: 100%;

  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;

  width: 300px;
  /* height: 300px; */
  transform: translate(-50%, -50%);

  padding-top: 32px;
  padding-bottom: 32px;

  text-align: center;
  background-color: #22252a;

  border-radius: 20px;

  @media (min-width: 768px) {
    width: 400px;
    /* height: 400px; */
  }

  @media (min-width: 1440px) {
  }
`;

export const Form = styled.form`
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 260px;
  height: 32px;
  margin-bottom: 24px;
`;

export const Textarea = styled.textarea`
  width: 260px;
  height: 100px;
  margin-bottom: 24px;

  resize: none;
`;

export const Title = styled.div`
  margin-bottom: 28px;

  font-family: "Poppins";
  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  font-weight: 600;
  color: #e4e6f0;
  border-color: transparent;

  @media (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl}px;
  }

  @media (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl}px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;

  background-color: transparent;
  border: none;

  @media (min-width: 375px) {
    bottom: 12px;
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    bottom: 14px;
    height: 48px;
    width: 48px;
  }

  @media (min-width: 1440px) {
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 2px;
    background-color: #a6a9b3;
    border-radius: 2px;
    transform: translate(-50%, -50%) rotate(45deg);

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover::before,
  &:hover::after {
    background-color: #e4e6f0;
  }
`;
