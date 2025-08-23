import React from 'react';
import Section from '../../Components/Section/Section';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedPropertiesSection from '../../components/FeaturedPropertiesSection/FeaturedPropertiesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Hero from '../../components/Hero/Hero';
import FAQSection from '../../components/Faq/FAQSection';
import ServiceNavigationBar from './../../Components/ServiceNavigationBar/ServiceNavigationBar.jsx'
import { serviceCards } from './../../Data/servicesPageData'
import { properties } from '../../Data/homeData.jsx';
import { testimonialsSectionData } from '../../Data/homeData.jsx';

const HomePage = () => {
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
    <div>

      {/* <Section className="AS-hero-section py-0">
        <HeroSection data={heroDataForHomePage} />
      </Section> */}

      <Hero />

      <ServiceNavigationBar sectionId={'features'} />

      <FeaturedPropertiesSection properties={properties} />
      <TestimonialsSection items={testimonialsSectionData.data}
        title={testimonialsSectionData.title}
        subtitle={testimonialsSectionData.subtitle}
      />
      <FAQSection />

    </div >
  );
};

export default HomePage;