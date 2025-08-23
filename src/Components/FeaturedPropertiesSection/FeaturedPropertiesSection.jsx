import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import PropertyCard from '../PropertyCard/PropertyCard'
import styles from './FeaturedPropertiesSection.module.css'
import Slider, { slideNext, slidePrev } from "../Slider/Slider.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
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
function FeaturedPropertiesSection({ properties }) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const featuredPropertiesSwiper = useRef(null)
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        993: { slidesPerView: 3, spaceBetween: 20 },
        1441: { slidesPerView: 3, spaceBetween: 30 },
    }

    const handleSliderStateChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <Section id= {'properties'}>
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
                        onStateChange={handleSliderStateChange}
                    >

                        {properties.map((property, index) => (
                            <PropertyCard
                                itemVariant={itemVariants}
                                title={property.title}
                                subtitle={property.subtitle}
                                price={property.price}
                                bedrooms={property.bedrooms}
                                bathrooms={property.bathrooms}
                                img={property.img}
                                buildType={property.buildType}
                                key={index}
                            />
                        ))}

                    </Slider>
                </div>
                <div className={styles.navigation}>
                    <IconButton
                        icon="arrow-left"
                        variant="dark"
                        type="arrow"
                        onClick={() => slidePrev(featuredPropertiesSwiper)}
                        disabled={isBeginning}
                    />
                    <IconButton
                        icon="arrow-right"
                        variant="dark"
                        type="arrow"
                        onClick={() => slideNext(featuredPropertiesSwiper)}
                        disabled={isEnd}
                    />
                </div>

            </motion.div>
        </Section>
    )
}

export default FeaturedPropertiesSection
