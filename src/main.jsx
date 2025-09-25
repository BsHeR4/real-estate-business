import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import Banner from './Components/Banner/Banner.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer';
import CTASection from './Components/CTASection/CTASection';
import theme from './Theme.jsx'
import { CssVarsProvider } from '@mui/joy/styles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename='/real-estate-business/'>
      <CssVarsProvider theme={theme}>
        <Banner />
        <Navbar />
        <App />
        <CTASection />
        <Footer />
      </CssVarsProvider>
    </HashRouter>
  </StrictMode>,
)

