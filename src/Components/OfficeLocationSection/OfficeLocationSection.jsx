import React from 'react';
import Section from "../Section/Section.jsx";
import './officeLocationSection.css'
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import Button from "../Button/Button.jsx";

const OfficeLocationSection = ({title, subtitle, children, buttons = []}) => {
    return (
        <Section>
            <section>
                <SectionHeader title={title} subtitle={subtitle} />

                <div className='mk-office-location-buttons'>
                    {buttons.map((btn, index) => (
                            <Button key={index}
                                    size={btn.size}
                                    variant={btn.variant}
                                    fullWidth={false}
                            >
                                {btn.text}
                            </Button>
                    ))}
                </div>

                <div>
                    {children}
                </div>
            </section>
        </Section>
    );
};

export default OfficeLocationSection;
