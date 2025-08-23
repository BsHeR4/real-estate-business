import React, { useState } from 'react';
import Section from "../Section/Section.jsx";
import './officeLocationSection.css'
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import Button from "../Button/Button.jsx";
import OfficeLocationCard from "../OfficeLocationCard/OfficeLocationCard.jsx";

const OfficeLocationSection = ({ title, subtitle, locations = [] }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const buttons = [
        { name: 'All' },
        { name: 'Regional' },
        { name: 'International' },
    ]

    const filterLocations = activeFilter === 'All'
        ? locations
        : locations.filter(location => location.type === activeFilter.toLowerCase());

    return (
        <Section id={'ourOffices'}>
            <SectionHeader title={title} subtitle={subtitle} />

            <div className='mk-office-location-buttons'>
                {buttons.map((btn, index) => (
                    <Button key={index}
                        size={btn.size}
                        variant={activeFilter === btn.name ? 'dark' : ''}
                        fullWidth={false}
                        onClick={() => setActiveFilter(btn.name)}
                    >
                        {btn.name}
                    </Button>
                ))}
            </div>

            <div>
                <OfficeLocationCard details={filterLocations} />
            </div>
        </Section>
    );
};

export default OfficeLocationSection;
