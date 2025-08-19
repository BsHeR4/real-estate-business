import React from 'react'
import styles from './PageIntro.module.css'
import Section from './../Section/Section'
import SectionHeader from './../SectionHeader/SectionHeader'
import ServiceNavigationBar from './../ServiceNavigationBar/ServiceNavigationBar'

function PageIntro() {
    return (
        <Section className={styles.PageIntro}>
            <SectionHeader
                title={"Elevate Your Real Estate Experience"}
                subtitle={"Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."}
                showIcon={false}
            />
        </Section>
    )
}

export default PageIntro
