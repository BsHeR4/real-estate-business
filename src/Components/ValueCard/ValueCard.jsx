import React from "react";
import "./ValueCard.css";

function ValueCard({ icon, title, description, addRightBorder, addBottomBorder }) {
    return (
        <div
            className={`ms-value-card ${addRightBorder ? "ms-right-border" : ""} ${addBottomBorder ? "ms-bottom-border" : ""}`}
        >
            <div className="ms-value-card-header">
                <div className="bm-icon-border">
                    {icon}
                </div>
                <h5 className="ms-value-title">{title}</h5>
            </div>
            <p className="ms-value-description">{description}</p>
        </div>
    );
}

export default ValueCard;
