import React from 'react'
import ServiceFeatureCard from './../ServiceFeatureCard/ServiceFeatureCard'
import ServiceCTA from './../ServiceCTA/ServiceCTA'
import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import styles from './ServiceCategorySection.module.css'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

function ServiceCategorySection({ title, subtitle, features, ctaData, sectionId }) {
    return (
        <Section id={sectionId}>
            <SectionHeader title={title} subtitle={subtitle} />

            <motion.div
                className={styles.serviceCategorySection}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((feature, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ServiceFeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    </motion.div>
                ))}

                <motion.div className={styles.cta} variants={itemVariants}>
                    <ServiceCTA
                        title={ctaData.title}
                        description={ctaData.description}
                    />
                </motion.div>
            </motion.div>

        </Section>
    )
}

export default ServiceCategorySection
