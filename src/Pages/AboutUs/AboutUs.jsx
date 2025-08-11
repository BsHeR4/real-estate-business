import React from 'react';
import Section from '../../components/Section/Section';
import HeroSection from '../../components/HeroSection/HeroSection';

const AboutUsPage = () => {
  const heroDataForAboutUsPage = {
    title: "Our Journey",
    titleClassName: "as-about-us-title",
    subtitle: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.",
    subtitleClassName: "about-us-subtitle",

    stats: [
      { id: 'hero-stat-1', number: "200+", label: "Happy Customers" },
      { id: 'hero-stat-2', number: "10K+", label: "Properties For Clients" },
      { id: 'hero-stat-3', number: "16+", label: "Years of Experience" }
    ],
    image: {
      src: '/assets/imgs/AboutUsImage.png',
      alt: "building"
    },
    layoutVariant: 'text-left',

    showStar: true
  };

  return (
    <div>
      <Section className="AU-hero-section">
        <HeroSection data={heroDataForAboutUsPage} />
      </Section>
    </div>
  );
};

export default AboutUsPage;