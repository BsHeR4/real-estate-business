import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import ClientCard from '../ClientCard/ClientCard';
import styles from './ClientsSection.module.css';
import Slider, { slideNext, slidePrev } from "../Slider/Slider.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import React, { useRef, useState } from 'react';

/**
 * @component ClientsSection
 * @description A container component that assembles and displays the 'Our Valued Clients' section,
 * It includes the section header and a grid of client cards, In a real application,
 * this component would be responsible for fetching the client data
 * * @returns {JSX.Element} The fully rendered 'Our Valued Clients' section
 */
function ClientsSection({ clients }) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const clientsSectionSwiper = useRef(null)
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 1, spaceBetween: 30 },
        993: { slidesPerView: 2, spaceBetween: 40 },
        1441: { slidesPerView: 2, spaceBetween: 50 },
    }

    const handleSliderStateChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    return (
        <Section id={'ourClients'}>
            <SectionHeader title={'Our Valued Clients'}
                subtitle={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`}
                className={'p-b-80'}
            />
            <div className={styles.container}>
                <Slider
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    swipe={clientsSectionSwiper}
                    onStateChange={handleSliderStateChange}
                >
                    {clients.map((client, index) => (
                        <ClientCard
                            year={client.year}
                            clientName={client.clientName}
                            domain={client.domain}
                            category={client.category}
                            say={client.say}
                            key={index} />
                    ))}
                </Slider>
            </div>
            <div className={styles.navigation}>
                <IconButton
                    icon="arrow-left"
                    variant="dark"
                    type="arrow"
                    onClick={() => slidePrev(clientsSectionSwiper)}
                    disabled={isBeginning}
                />
                <IconButton
                    icon="arrow-right"
                    variant="dark"
                    type="arrow"
                    onClick={() => slideNext(clientsSectionSwiper)}
                    disabled={isEnd}
                />
            </div>
        </Section>
    )
}

export default ClientsSection
