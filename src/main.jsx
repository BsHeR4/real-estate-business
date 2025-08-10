import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Banner from './Components/Banner/Banner.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Banner />
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>,
)

