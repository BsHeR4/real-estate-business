import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper} from "swiper/react";
import {Navigation, A11y, Autoplay} from "swiper/modules";
import {SwiperSlide} from "swiper/react";
import './Slider.css'


const Slider = ({children, slidesPerView, breakpoints, swipe}) => {
    const hundleSlider = (slider) => {
        if (swipe) {
            swipe.current = slider;
        }
    }
    return (
        <Swiper
            modules= {[Navigation, A11y, Autoplay]}
            onSwiper={hundleSlider}
            slidesPerView= {slidesPerView}
            breakpoints= {breakpoints}
            speed={800}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
        >
            {React.Children.map(children, (child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    )
}

export function slideNext(swipe) {
    swipe?.current?.slideNext()
}

export function slidePrev(swipe) {
    swipe?.current?.slidePrev()
}
export default Slider
