import React from 'react'
import ServiceFeatureCard from './../ServiceFeatureCard/ServiceFeatureCard'
import ServiceCTA from './../ServiceCTA/ServiceCTA'
import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import styles from './ServiceCategorySection.module.css'

function ServiceCategorySection({ title, subtitle, features, ctaData, sectionId }) {
    return (
        <Section id={sectionId}>
            <SectionHeader title={title} subtitle={subtitle} />

            <div className={styles.serviceCategorySection}>
                {features.map((feature, index) => (
                    <ServiceFeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}

                <ServiceCTA
                    className={styles.cta}
                    title={ctaData.title}
                    description={ctaData.description}
                />
            </div>

        </Section>
    )
}

export default ServiceCategorySection
