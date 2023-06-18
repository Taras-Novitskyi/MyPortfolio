import React, { ReactNode } from 'react'
import { StyledContainer } from "./Conteiner.styled";

type FooProps = {
  children: ReactNode;
};

export const Container: React.FC<FooProps> = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};
