import React, { useRef } from 'react'
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import TestimonialCard from "../TestimonialCard/TestimonialCard.jsx";
import Section from "../Section/Section.jsx";
import './TestimonialsSection.css'
import IconButton from "../IconButton/IconButton.jsx";
import Slider, { slideNext, slidePrev } from "../Slider/Slider.jsx";
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
 * TestimonialsSection Component
 *
 * A reusable section component for displaying customer testimonials with navigation controls.
 *
 * Props:
 * - title (string): Main section heading
 * - subtitle (string): Supporting subheading text
 * - children (node): Testimonial content/components to display
 *
 * Usage:
 * <TestimonialsSection title="What Our Clients Say" subtitle="Customer feedback">
 *   <TestimonialCard />
 *   <TestimonialCard />
 * </TestimonialsSection>
 *
 * Dependencies:
 * - SectionHeader: For section heading
 * - Section: Parent container component
 * - IconButton: Navigation arrow buttons
 * - TestimonialsSection.css: Styling module
 */
const TestimonialsSection = ({ title, subtitle, items }) => {
    const testimonialsSwiper = useRef(null)
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        993: { slidesPerView: 3, spaceBetween: 20 },
        1441: { slidesPerView: 3, spaceBetween: 30 },
    }

    return (
        <Section>
            <SectionHeader title={title} subtitle={subtitle} />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={'mk-testimonials-container'}>
                <Slider
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    swipe={testimonialsSwiper}
                >
                    {items.map((item, index) => (
                        <TestimonialCard
                            itemVariant={itemVariants}
                            rating={item.rating}
                            title={item.title}
                            description={item.description}
                            client={item.client}
                            key={index}
                        />
                    ))}
                </Slider>
            </motion.div>
            <div className={'mk-testimonials-navigation'}>
                <IconButton
                    icon="arrow-left"
                    variant="dark"
                    type="arrow"
                    onClick={() => slidePrev(testimonialsSwiper)}
                />
                <IconButton
                    icon="arrow-right"
                    variant="dark"
                    type="arrow"
                    onClick={() => slideNext(testimonialsSwiper)}
                />
            </div>
        </Section>
    )
}
export default TestimonialsSection
