import React from 'react';
import Section from '../../components/Section/Section';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
  const heroDataForHomePage = {
    title: "Discover Your Dream Property with Estatein",
      titleClassName: "AS-hero-title", // <-- سيتم تمرير هذا الكلاس

    subtitle: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
      subtitleClassName: "AS-hero-subtitle", // <-- وسيتم تمرير هذا الكلاس

    buttons: [
      { id: 'hero-btn-1', text: "Learn More", link: "/AboutUs", variant: "secondary" , size : "small"  },
      { id: 'hero-btn-2', text: "Browse Properties", link: "/PropertyDetails", variant: "primary" , size : "small" }
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
      {/* Add the className prop here */}
      <Section className="AS-hero-section">
        <HeroSection data={heroDataForHomePage} />
      </Section>
    </div>
  );
};

export default HomePage;