import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Villa from './Components/Villa/Villa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Villa />
    </BrowserRouter>
  </StrictMode>,
)

