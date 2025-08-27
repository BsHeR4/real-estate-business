import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader/SectionHeader";
import BaseCard from "../BaseCard/BaseCard";
import ValueCard from "../ValueCard/ValueCard";
import { FaStar } from "react-icons/fa6";
import "./ValuesSection.css";
import Excellence from './../../assets/icons/excellence.svg?react'
import Client from './../../assets/icons/clients.svg?react'

function ValuesSection() {
    const values = [
        {
            icon: <FaStar />,
            title: "Trust",
            description: "Trust is the cornerstone of every successful real estate transaction."
        },
        {
            icon: <Excellence />,
            title: "Excellence",
            description: "We set the bar high for ourselves. From the properties we list to the services we provide."
        },
        {
            icon: <Client />,
            title: "Client-Centric",
            description: "Your dreams and needs are at the center of our universe. We listen, understand."
        },
        {
            icon: <FaStar />,
            title: "Our Commitment",
            description: "We are dedicated to providing you with the highest level of service, professionalism, and support."
        }
    ];

    return (
        <Section id={'ourWorks'}>
            <div className="ms-values-container">
                <div className="ms-values-left">
                    <SectionHeader
                        title="Our Values"
                        subtitle="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                    />
                </div>
                <BaseCard className="ms-values-right card-shadow">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                            addRightBorder={index === 0 || index === 2}
                            addBottomBorder={index < 2}
                            isMobileBeforeLast={index === values.length - 2}
                        />
                    ))}
                </BaseCard>
            </div>
        </Section>
    );
}

export default ValuesSection;
