import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ErrorPage />
    <Home />
    <Login />
  </StrictMode>,
)
