import React from 'react';
import Section from "../Section/Section.jsx";
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import './ComprehensiveSection.css'

const ComprehensiveSection = ({title, subtitle, children}) => {
    return (
        <Section>
            <section>
                <SectionHeader title={title} subtitle={subtitle} />
                    <div className="mk-note-container">
                        <p className={'mk-note'}>Note</p>
                        <p className={'mk-note-description'}>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
                    </div>

                <div className="mk-two-column-layout">
                    <div className="mk-left-column">
                        <p className="mk-price-label">Listing Price</p>
                        <p className="mk-price-value">$1,250,000</p>
                    </div>

                    <div className="mk-right-column">
                        {children}
                    </div>
                </div>
            </section>
        </Section>
    );
};

export default ComprehensiveSection;
