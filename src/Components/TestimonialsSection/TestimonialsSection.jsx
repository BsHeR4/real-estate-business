import React, {useRef} from 'react'
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import Section from "../Section/Section.jsx";
import './TestimonialsSection.css'
import IconButton from "../IconButton/IconButton.jsx";
import Slider, {slideNext, slidePrev} from "../Slider/Slider.jsx";


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
const TestimonialsSection = ({title, subtitle, children}) => {
    const testimonialsSwiper = useRef(null)
    const breakpoints = {
        0:    { slidesPerView: 1, spaceBetween: 20},
        768:  { slidesPerView: 2, spaceBetween: 20},
        993:  { slidesPerView: 3, spaceBetween: 20},
        1441: { slidesPerView: 3, spaceBetween: 30},
    }

    return (
        <Section>
            <section>
                <SectionHeader title={title} subtitle={subtitle}/>
                <div className={'mk-testimonials-container'}>
                    <Slider
                        slidesPerView={1}
                        breakpoints={breakpoints}
                        swipe={testimonialsSwiper}
                    >
                    {children}
                    </Slider>
                </div>
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
            </section>
        </Section>
    )
}
export default TestimonialsSection
