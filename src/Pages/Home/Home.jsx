import React, { useState, useEffect } from 'react';
import Section from '../../Components/Section/Section';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedPropertiesSection from '../../components/FeaturedPropertiesSection/FeaturedPropertiesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Hero from '../../components/Hero/Hero';
import FAQSection from '../../components/Faq/FAQSection';
import ServiceNavigationBar from './../../Components/ServiceNavigationBar/ServiceNavigationBar.jsx'
import { serviceCards } from './../../Data/servicesPageData'
// import { properties } from '../../Data/homeData.jsx';
import { testimonialsSectionData, serviceNavigationBar } from '../../Data/homeData.jsx';
import { getPropertiesFromStorage } from '../../Services/storageService';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const data = getPropertiesFromStorage();
    setProperties(data);
  }, []);

  const heroDataForHomePage = {
    title: "Discover Your Dream Property with Estatein",
    titleClassName: "AS-hero-title",

    subtitle: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
    subtitleClassName: "AS-hero-subtitle",

    buttons: [
      { id: 'hero-btn-1', text: "Learn More", link: "/AboutUs", variant: "secondary", size: "small" },
      { id: 'hero-btn-2', text: "Browse Properties", link: "/PropertyDetails", variant: "primary", size: "small" }
    ],
    stats: [
      { id: 'hero-stat-1', number: "200+", label: "Happy Customers" },
      { id: 'hero-stat-2', number: "10K+", label: "Properties For Clients" },
      { id: 'hero-stat-3', number: "16+", label: "Years of Experience" }
    ],
    image: {
      src: '/assets/imgs/HeroImage.jpg',
      alt: "Modern skyscraper building"
    },
    layoutVariant: 'text-left',

    showStar: false
  };

  return (
    <div>

      {/* <Section className="AS-hero-section py-0">
        <HeroSection data={heroDataForHomePage} />
      </Section> */}

      <Hero />

      <ServiceNavigationBar staticItems={serviceNavigationBar} sectionId={'features'} />

      {properties.length > 0 && (
        <FeaturedPropertiesSection properties={properties} />
      )}
      <TestimonialsSection items={testimonialsSectionData.data}
        title={testimonialsSectionData.title}
        subtitle={testimonialsSectionData.subtitle}
      />
      <FAQSection />

    </div >
  );
};

export default HomePage;