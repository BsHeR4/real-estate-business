import React from 'react';
import BaseCard from "../BaseCard/BaseCard.jsx";
import './OfficeLocationCard.css'
import PropertyFeature from "../PropertyFeature/PropertyFeature.jsx";
import { PiPhoneFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button.jsx";

const OfficeLocationCard = ({details}) => {
    return (
        <div className="mk-location-card-container">
            {details.map((detail) => (
                <BaseCard key={detail.id} padding='large'>
                    <div className="mk-location-content">
                        <div className="mk-location-title">{detail.title}</div>
                        <div className="mk-location-address">{detail.location}</div>
                        <div className="mk-location-description">{detail.description}</div>
                    </div>

                    <div className="mk-location-details">
                        <PropertyFeature icon={<HiMail />} className="mk-padding">{detail.mail}</PropertyFeature>
                        <PropertyFeature icon={<PiPhoneFill />} className="mk-padding">{detail.phone}</PropertyFeature>
                        <PropertyFeature icon={<FaLocationDot />} className="mk-padding">{detail.map}</PropertyFeature>
                    </div>

                    <Button size={'large'} fullWidth={true}>Get Direction</Button>
                </BaseCard>
            ))}
        </div>
    );
};

export default OfficeLocationCard;
