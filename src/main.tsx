import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from "react-router";
import EnterNamePage from './pages/EnterNamePage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterNamePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
