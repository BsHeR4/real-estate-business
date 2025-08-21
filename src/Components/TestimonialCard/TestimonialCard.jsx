import React from 'react'
import BaseCard from "../BaseCard/BaseCard.jsx";
import StarRating from "../StarRating/StarRating.jsx";
import ClientProfile from "../ClientProfile/ClientProfile.jsx";
import './TestimonialCard.css';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

/**
 * TestimonialCard Component
 *
 * A specialized card component for displaying customer testimonials with rating, title, description, and client information.
 *
 * Props:
 * - rating (number): Star rating value
 * - title (string): Testimonial title/headline
 * - description (string): Detailed testimonial content
 * - client (object): Client information containing name, location, and photo
 *
 * Usage:
 * <TestimonialCard
 *   rating={5}
 *   title="Excellent Service!"
 *   description="Our experience with Estatein..."
 *   client={{
 *     name: "Wade Warren",
 *     location: "USA, California",
 *     photo: "/assets/imgs/Profile.png"
 *   }}
 * />
 *
 * Dependencies:
 * - BaseCard: Parent card component with styling
 * - StarRating: Rating display component
 * - ClientProfile: Client information display component
 * - TestimonialCard.css: Specific styling for testimonial cards
 */
const TestimonialCard = ({ itemVariant, rating, title, description, client }) => {
    const { name, location, photo } = client
    return (
        <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.03, y: -5 }}
        >
            <BaseCard padding='large'>
                <StarRating rating={rating} />
                <div className={'mk-text-container'}>
                    <h2 className={'mk-testimonial-title'}>{title}</h2>
                    <p className={'mk-testimonial-description'}>{description}</p>
                </div>
                <ClientProfile name={name} location={location} photo={photo} />
            </BaseCard>
        </motion.div>
    )
}
export default TestimonialCard
