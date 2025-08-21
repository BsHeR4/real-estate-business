import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import PropertyCard from '../PropertyCard/PropertyCard'
import styles from './FeaturedPropertiesSection.module.css'
import Slider, { slideNext, slidePrev } from "../Slider/Slider.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

/**
 * @component FeaturedPropertiesSection
 * @description A "smart" container component that assembles and displays the entire 'Featured Properties' section. It includes the section header and the property cards. In a real application, this component would also be responsible for fetching the property data
 * * @returns {JSX.Element} The fully rendered 'Featured Properties' section
 */
function FeaturedPropertiesSection() {
    const featuredPropertiesSwiper = useRef(null)
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        993: { slidesPerView: 3, spaceBetween: 20 },
        1441: { slidesPerView: 3, spaceBetween: 30 },
    }

    return (
        <Section>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <SectionHeader
                    title={'Featured Properties'}
                    subtitle={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'} />

                <div className={styles.container}>
                    <Slider
                        slidesPerView={1}
                        breakpoints={breakpoints}
                        swipe={featuredPropertiesSwiper}
                    >
                        <PropertyCard
                            itemVariant={itemVariants}
                            img={'./../../../public/assets/imgs/FeatiredProperties/SeasideSerenityVilla.png'}
                            title={'Seaside Serenity Villa'}
                            subtitle={'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... '}
                            price={'$550,000'}
                            bedrooms={'4'} bathrooms={'3'}
                        />

                        <PropertyCard
                            itemVariant={itemVariants}
                            img={'./../../../public/assets/imgs/FeatiredProperties/MetropolitanHaven.png'}
                            title={'Metropolitan Haven'}
                            subtitle={'A chic and fully-furnished 2-bedroom apartment with panoramic city views... '}
                            price={'$550,000'}
                            bedrooms={'2'} bathrooms={'2'}
                        />

                        <PropertyCard
                            itemVariant={itemVariants}
                            img={'./../../../public/assets/imgs/FeatiredProperties/RusticRetreatCottage.png'}
                            title={'Rustic Retreat Cottage'}
                            subtitle={'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... '}
                            price={'$550,000'}
                            bedrooms={'3'} bathrooms={'3'}
                        />
                        <PropertyCard
                            itemVariant={itemVariants}
                            img={'./../../../public/assets/imgs/FeatiredProperties/RusticRetreatCottage.png'}
                            title={'Rustic Retreat Cottage'}
                            subtitle={'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... '}
                            price={'$550,000'}
                            bedrooms={'3'} bathrooms={'3'}
                        />
                        <PropertyCard
                            itemVariant={itemVariants}
                            img={'./../../../public/assets/imgs/FeatiredProperties/RusticRetreatCottage.png'}
                            title={'Rustic Retreat Cottage'}
                            subtitle={'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... '}
                            price={'$550,000'}
                            bedrooms={'3'} bathrooms={'3'}
                        />
                    </Slider>
                </div>
                <div className={styles.navigation}>
                    <IconButton
                        icon="arrow-left"
                        variant="dark"
                        type="arrow"
                        onClick={() => slidePrev(featuredPropertiesSwiper)}
                    />
                    <IconButton
                        icon="arrow-right"
                        variant="dark"
                        type="arrow"
                        onClick={() => slideNext(featuredPropertiesSwiper)}
                    />
                </div>

            </motion.div>
        </Section>
    )
}

export default FeaturedPropertiesSection
