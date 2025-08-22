import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CommonCard.css";

const CommonCard = ({
  HeadingTag = "h5",
  titleLink,
  cardTitle,
  titleStyle,
  titleSize,
  cardDesc,
  cardStyle,
  isArrow,
  iconType,
}) => {

  const getIcon = () => {
    switch (iconType) {
      case "icon1":
        return "assets/imgs/service-icon-1.svg";
      case "icon2":
        return "assets/imgs/service-icon-2.svg";
      case "icon3":
        return "assets/imgs/service-icon-3.svg";
      case "icon4":
        return "assets/imgs/service-icon-4.svg";
      default:
        return "assets/imgs/service-icon-5.svg";
    }
  };

  return (
    <motion.div className={`ms-common-card ${cardStyle}`}>
      {isArrow && (
        <img
          src="assets/imgs/arrow-icon.svg"
          className="ms-arrow-icon"
          alt="arrow icon"
        />
      )}

      <div className={`ms-card-header ${titleStyle}`}>
        <div className="ms-icon-border-outer">
          <div className="ms-icon-border-inner">
            <img src={getIcon()} alt="card icon" className="ms-card-icon" />
          </div>
        </div>

        {HeadingTag === Link ? (
          <Link to={titleLink} className={`ms-card-title-link ${titleSize}`}>
            {cardTitle}
          </Link>
        ) : HeadingTag === "a" ? (
          <a href={titleLink} className={`ms-card-title-link ${titleSize}`}>
            {cardTitle}
          </a>
        ) : (
          <HeadingTag className={`ms-card-title ${titleSize}`}>
            {cardTitle}
          </HeadingTag>
        )}
      </div>

      {cardDesc && <p className="ms-card-desc">{cardDesc}</p>}
    </motion.div>
  );
};

export default CommonCard;
