import React from 'react'
import styles from './PageIntro.module.css'
import Section from './../Section/Section'
import SectionHeader from './../SectionHeader/SectionHeader'
import ServiceNavigationBar from './../ServiceNavigationBar/ServiceNavigationBar'

function PageIntro({ title, subtitle }) {
    return (
        <Section className={styles.PageIntro}>
            <SectionHeader
                title={title}
                subtitle={subtitle}
                showIcon={false}
                directAnimation={true}
            />
        </Section>
    )
}

export default PageIntro
