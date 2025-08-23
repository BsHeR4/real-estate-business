import React from 'react';
import Section from '../../components/Section/Section';
import ValuesSection from '../../components/ValuesSection/ValuesSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import Experience from '../../components/Experience/Experience';
import TeamSection from '../../components/TeamSection/TeamSection';
import ClientsSection from '../../components/ClientsSection/ClientsSection';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';
import AchievementsSection from '../../components/AchievementsSection/AchievementsSection';
import { FaTwitter } from "react-icons/fa";

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
        <HeroSection data={heroDataForAboutUsPage} variant="about" />
      </Section>

      <ValuesSection />

      <AchievementsSection />

      <Experience />

      <TeamSection title={'Meet the Estatein Team'} subtitle={'At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.'}>
        <TeamMemberCard icon={'twitter'} photo={'assets/imgs/teamMember1.png'}
          member={{ name: "Max Mitchell", position: "Founder" }}
        />
        <TeamMemberCard icon={'twitter'} photo={'assets/imgs/teamMember2.png'}
          member={{ name: "Sarah Johnson", position: "Chief Real Estate Officer" }}
        />
        <TeamMemberCard icon={'twitter'} photo={'assets/imgs/teamMember3.png'}
          member={{ name: "David Brown", position: "Head of Property Management" }}
        />
        <TeamMemberCard icon={'twitter'} photo={'assets/imgs/teamMember4.png'}
          member={{ name: "Michael Turner", position: "Legal Counsel" }}
        />
      </TeamSection>

      <ClientsSection />
    </div>
  );
};

export default AboutUsPage;