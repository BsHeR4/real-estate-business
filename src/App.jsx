import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Home from './Pages/Home/Home'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import { ItemsProvider } from "./context/ItemsContext.jsx";
import { serviceCards } from "./Data/servicesPageData.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import useScrollToHash from './../src/Hooks/useScrollToHash.jsx';

function App() {
  useScrollToHash();

  return (
    <>
      <ItemsProvider initialItems={serviceCards}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="/PropertyDetails" element={<PropertyDetails />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ItemsProvider>
    </>
  );
}

export default App;
