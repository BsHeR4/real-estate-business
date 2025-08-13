import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader/SectionHeader";
import ValueCard from "../ValueCard/ValueCard";
import "./ValuesSection.css";

function ValuesSection() {
    const values = [
        {
            icon: "/public/assets/img/Icon Container.svg",
            title: "Trust",
            description: "Trust is the cornerstone of every successful real estate transaction."
        },
        {
            icon: "/public/assets/img/Icon Container(1).svg",
            title: "Excellence",
            description: "We set the bar high for ourselves. From the properties we list to the services we provide."
        },
        {
            icon: "/public/assets/img/Icon Container(2).svg",
            title: "Client-Centric",
            description: "Your dreams and needs are at the center of our universe. We listen, understand."
        },
        {
            icon: "/public/assets/img/Icon Container(3).svg",
            title: "Our Commitment",
            description: "We are dedicated to providing you with the highest level of service, professionalism, and support."
        }
    ];

    return (
        <Section className="ms-values-section">
            <div className="ms-values-container">
                <div className="ms-values-left">
                    <SectionHeader
                        title="Our Values"
                        subtitle="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                    />
                </div>
                <div className="ms-values-right">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                            addRightBorder={index === 0 || index === 2}
                            addBottomBorder={index < 2}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default ValuesSection;
