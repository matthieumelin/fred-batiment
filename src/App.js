import React from "react";

// helmet
import { HelmetProvider } from "react-helmet-async";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./utils/Router";

// utils
import { GlobalStyle } from "./utils/style/GlobalStyle";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import ContactPage from "./pages/ContactPage";
import AchievementsPage from "./pages/AchievementsPage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={Router.contact} element={<ContactPage />} />
          <Route path={Router.realisations} element={<AchievementsPage />} />
          <Route index element={<AchievementsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
