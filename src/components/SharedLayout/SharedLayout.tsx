import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { LayoutContainer, Main } from "./SharedLayout.styled";

export const SharedLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </LayoutContainer>
  );
};
