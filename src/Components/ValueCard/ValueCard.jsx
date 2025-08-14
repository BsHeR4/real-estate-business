import React from "react";
import "./ValueCard.css";

function ValueCard({ icon, title, description, addRightBorder, addBottomBorder }) {
    return (
        <div
            className={`ms-value-card ${addRightBorder ? "ms-right-border" : ""} ${addBottomBorder ? "ms-bottom-border" : ""}`}
        >
            <div className="ms-value-card-header">
                <img src={icon} alt={title} className="ms-value-icon" />
                <h5 className="ms-value-title">{title}</h5>
            </div>
            <p className="ms-value-description">{description}</p>
        </div>
    );
}

export default ValueCard;
