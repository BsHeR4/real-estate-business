import Section from './../Section/Section';
import SectionHeader from './../sectionheader/SectionHeader';
import FAQItem from './FAQItem';
import faqData from '../../Data/FaqData'
import IconButton from '../IconButton/IconButton';
import React, { useRef, useState } from 'react';
import Slider from "../Slider/Slider.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import './FAQSection.css';

const FAQSection = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const faqSection = useRef(null)
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 21 },
        993: { slidesPerView: 3, spaceBetween: 20 },
        1441: { slidesPerView: 3, spaceBetween: 30 },
    }

    const handleSliderStateChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <Section id={'faq'}>
            <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            />
            <div className="zs-faq-container">
                <div className="zs-faq-card">
                    <Slider
                        slidesPerView={1}
                        breakpoints={breakpoints}
                        swipe={faqSection}
                        onStateChange={handleSliderStateChange}
                    >
                        {faqData.map((faq, index) => (
                            <SwiperSlide>
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            </SwiperSlide>
                        ))}
                    </Slider>
                </div>
                <div className="zs-faq-navigation">
                    <IconButton
                        icon="arrow-left"
                        type="arrow"
                        variant='dark'
                        // disabled 
                        onClick={() => faqSection.current?.slidePrev()}
                        disabled={isBeginning}
                    />
                    <IconButton
                        icon="arrow-right"
                        type="arrow"
                        variant='dark'
                        onClick={() => faqSection.current?.slideNext()}
                        disabled={isEnd}
                    />
                </div>
            </div>
        </Section>
    );
};

export default FAQSection;