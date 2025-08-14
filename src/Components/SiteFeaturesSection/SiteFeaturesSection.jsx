import CommonCard from "../CommonCard/CommonCard";
import Section from "../Section/Section";
import "./SiteFeaturesSection.css";

const SiteFeaturesSection = ({ data }) => {
  return (
    <Section className="p-0 sectionShadow">
      <div className="ms-section">
        {data.map((card, index) => (
          <CommonCard
            key={index}
            HeadingTag={card.HeadingTag}
            titleLink={card.titleLink}
            isArrow={true}
            cardTitle={card.cardTitle}
            cardStyle="ms-card-style"
            titleStyle="ms-title-style"
            titleSize="ms-title-size"
            iconType={card.iconType}
          />
        ))}
      </div>
    </Section>
  );
};

export default SiteFeaturesSection;
