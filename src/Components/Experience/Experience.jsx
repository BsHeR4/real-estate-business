
import Section from './../Section/Section.jsx'
import SectionHeader from './../SectionHeader/SectionHeader';
import ExperienceCard from './ExperienceCard.jsx'
import './Experience.css';
import { ExperienceData } from './../../Data/ExperienceData.jsx';

const ExperienceSection = () => {
  return (
    <Section>
      <SectionHeader
        title="Navigating the Estatein Experience"
        subtitle="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
      />
      <div className="zs-exp-cards-grid">
        {ExperienceData.map((card, index) => (
          <ExperienceCard
            key={index}
            step={card.step}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;