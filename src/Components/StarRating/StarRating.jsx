import React from 'react'
import './StarRating.css'

/**
 * StarRating Component
 *
 * A reusable star rating component that displays filled and empty stars based on a rating value.
 *
 * Props:
 * - rating (number): Current rating value.
 * - maxStars (number): Maximum number of stars to display.
 *
 * Usage:
 * <StarRating rating={3} />
 *
 * Dependencies:
 * - StarRating.css: Styling module
 */
const StarRating = ({ rating = 0, maxStars = 5 }) => {
    const stars = Array.from({ length: maxStars }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= rating;

        return (
            <div key={index} className="mk-star-wrapper">
                <img
                    src="assets/imgs/Shape.png"
                    alt="Star"
                    className={`mk-star ${isFilled ? 'mk-star-filled' : 'mk-star-empty'}`}
                />
            </div>
        );
    });

    return (
        <div className={'mk-star-rating'}>
            {stars}
        </div>
    );
};

export default StarRating;