import React from "react";

import { Btn } from "./Button.styled";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <Btn {...buttonProps}>{children}</Btn>;
};
