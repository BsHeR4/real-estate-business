import React from 'react';
import Section from "../Section/Section.jsx";
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import './TeamSection.css'

const TeamSection = ({title, subtitle, children}) => {
    return (
        <Section>
            <section>
                <SectionHeader title={title} subtitle={subtitle} />
                <div className='mk-team-card-container'>
                    {children}
                </div>
            </section>
        </Section>
    );
};

export default TeamSection;
