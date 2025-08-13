import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

// الأقسام الإضافية
import IconStar from "./component/Icons/Icons";
import SiteFeaturesSection from "./components/SiteFeaturesSection/SiteFeaturesSection";
import ValuesSection from "./components/ValuesSection/ValuesSection";

function App() {
  const featuresData = [
    {
      HeadingTag: "h5",
      titleLink: "/dream-home",
      cardTitle: "Find Your Dream Home",
      iconType: "icon1",
    },
    {
      HeadingTag: "h5",
      titleLink: "/property-value",
      cardTitle: "Unlock Property Value",
      iconType: "icon2",
    },
    {
      HeadingTag: "h5",
      titleLink: "/management",
      cardTitle: "Effortless Property Management",
      iconType: "icon3",
    },
    {
      HeadingTag: "h5",
      titleLink: "/investments",
      cardTitle: "Smart Investments, Informed Decisions",
      iconType: "icon4",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      
      <IconStar />

      
      <SiteFeaturesSection data={featuresData} />

      
      <ValuesSection />
    </>
  );
}

export default App;
