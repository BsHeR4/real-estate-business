import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Home from './Pages/Home/Home'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='/PropertyDetails' element={<PropertyDetails />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
