import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Router } from './utils/Router'

import { GlobalStyle } from './utils/style/GlobalStyle'

import RealisationsPage from './pages/RealisationsPage'

import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={Router.realisations} element={<RealisationsPage />} />
        <Route index element={<RealisationsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
