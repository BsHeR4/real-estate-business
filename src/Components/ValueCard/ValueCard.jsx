import React from "react";
import "./ValueCard.css";
import clsx from "clsx";

function ValueCard({ icon, title, description, addRightBorder, addBottomBorder, isMobileBeforeLast }) {
    const classes = clsx(
        'ms-value-card',
        { 'ms-right-border': addRightBorder },
        { 'ms-bottom-border': addBottomBorder },
        { 'mobile-before-last': isMobileBeforeLast }
    )
    return (
        <div
            className={classes}
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
