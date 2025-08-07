import React from 'react'
import SectionHeader from "../sectionheader/SectionHeader.jsx";
import Section from "../Section/Section.jsx";
import './TestimonialsSection.css'
import IconButton from "../IconButton/IconButton.jsx";


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
    return (
        <Section>
            <section className={'mk-testimonials-section'}>
                <SectionHeader title={title} subtitle={subtitle}/>
                <div className={'mk-testimonials-container'}>
                    {children}
                </div>
                <div className={'mk-testimonials-navigation'}>
                    <IconButton
                        icon="arrow-left"
                        variant="dark"
                        type="arrow"
                    />
                    <IconButton
                        icon="arrow-right"
                        variant="dark"
                        type="arrow"
                    />
                </div>
            </section>
        </Section>
    )
}
export default TestimonialsSection
