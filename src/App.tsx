import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const MainPage = lazy(() => import("./pages/MainPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
