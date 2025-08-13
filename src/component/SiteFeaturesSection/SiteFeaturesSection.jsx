import CommonCard from "../CommonCard/CommonCard";
import "./SiteFeaturesSection.css";

const SiteFeaturesSection = ({ data }) => {
  return (
    <section className="ms-section">
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
    </section>
  );
};

export default SiteFeaturesSection;
