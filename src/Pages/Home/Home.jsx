import React from 'react';
import Section from '../../Components/Section/Section';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedPropertiesSection from '../../components/FeaturedPropertiesSection/FeaturedPropertiesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import FAQSection from '../../components/Faq/FAQSection';
import Footer from '../../components/Footer/Footer';
import SiteFeaturesSection from '../../Components/SiteFeaturesSection/SiteFeaturesSection';

const HomePage = () => {
  const heroDataForHomePage = {
    title: "Discover Your Dream Property with Estatein",
    subtitle: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
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
      {/* Add the className prop here */}
      <Section className="AS-hero-section">
        <HeroSection data={heroDataForHomePage} />
      </Section>

      <SiteFeaturesSection data={featuresData} />

      <FeaturedPropertiesSection />
      <TestimonialsSection
        title={'What Our Clients Say'}
        subtitle={'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'}
      >

        <TestimonialCard
          rating={5}
          title="Exceptional Service!"
          description="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
          client={{
            name: "Wade Warren",
            location: "USA, California",
            photo: "/assets/imgs/Profile.png"
          }}
        />
        <TestimonialCard
          rating={3}
          title="Efficient and Reliable"
          description="Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results."
          client={{
            name: "Wade Warren",
            location: "USA, California",
            photo: "/assets/imgs/Profile.png"
          }}
        />
        <TestimonialCard
          rating={2}
          title="Trusted Advisors"
          description="The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!"
          client={{
            name: "Wade Warren",
            location: "USA, California",
            photo: "/assets/imgs/Profile.png"
          }}
        />

      </TestimonialsSection>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;