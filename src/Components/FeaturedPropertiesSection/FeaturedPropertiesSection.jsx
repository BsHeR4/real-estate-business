import React from 'react'
import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import PropertyCard from '../PropertyCard/PropertyCard'
import styles from './FeaturedPropertiesSection.module.css'

/**
 * @component FeaturedPropertiesSection
 * @description A "smart" container component that assembles and displays the entire 'Featured Properties' section. It includes the section header and the property cards. In a real application, this component would also be responsible for fetching the property data
 * * @returns {JSX.Element} The fully rendered 'Featured Properties' section
 */
function FeaturedPropertiesSection() {
    return (
        <Section>
            <SectionHeader
                title={'Featured Properties'}
                subtitle={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'} />
            <div className={styles.container}>
                <PropertyCard img={'./../../../public/assets/imgs/FeatiredProperties/SeasideSerenityVilla.png'}
                    title={'Seaside Serenity Villa'}
                    subtitle={'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... '}
                    price={'$550,000'}
                    bedrooms={'4'} bathrooms={'3'}
                />

                <PropertyCard img={'./../../../public/assets/imgs/FeatiredProperties/MetropolitanHaven.png'}
                    title={'Metropolitan Haven'}
                    subtitle={'A chic and fully-furnished 2-bedroom apartment with panoramic city views... '}
                    price={'$550,000'}
                    bedrooms={'2'} bathrooms={'2'}
                />

                <PropertyCard img={'./../../../public/assets/imgs/FeatiredProperties/RusticRetreatCottage.png'}
                    title={'Rustic Retreat Cottage'}
                    subtitle={'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... '}
                    price={'$550,000'}
                    bedrooms={'3'} bathrooms={'3'}
                />
            </div>
        </Section>
    )
}

export default FeaturedPropertiesSection
