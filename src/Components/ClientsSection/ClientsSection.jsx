import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import ClientCard from '../ClientCard/ClientCard';
import styles from './ClientsSection.module.css';
import Slider, { slideNext, slidePrev } from "../Slider/Slider.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import React, { useRef } from 'react'

/**
 * @component ClientsSection
 * @description A container component that assembles and displays the 'Our Valued Clients' section,
 * It includes the section header and a grid of client cards, In a real application,
 * this component would be responsible for fetching the client data
 * * @returns {JSX.Element} The fully rendered 'Our Valued Clients' section
 */
function ClientsSection() {
    const clientsSectionSwiper = useRef(null)
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 1, spaceBetween: 30 },
        993: { slidesPerView: 2, spaceBetween: 20 },
        1441: { slidesPerView: 2, spaceBetween: 50 },
    }
    return (
        <Section>
            <SectionHeader title={'Our Valued Clients'}
                subtitle={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`}
                className={'p-b-80'}
            />
            <div className={styles.container}>
                <Slider
                    slidesPerView={1}
                    breakpoints={breakpoints}
                    swipe={clientsSectionSwiper}
                >
                    <ClientCard year={'2019'} clientName={'ABC Coroporation'} domain={'Commercial Real Estate'} category={'Luxury Home Development'} say={`Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`} />
                    <ClientCard year={'2019'} clientName={'ABC Coroporation'} domain={'Commercial Real Estate'} category={'Luxury Home Development'} say={`Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`} />
                </Slider>
            </div>
            <div className={styles.navigation}>
                <IconButton
                    icon="arrow-left"
                    variant="dark"
                    type="arrow"
                    onClick={() => slidePrev(clientsSectionSwiper)}
                />
                <IconButton
                    icon="arrow-right"
                    variant="dark"
                    type="arrow"
                    onClick={() => slideNext(clientsSectionSwiper)}
                />
            </div>
        </Section>
    )
}

export default ClientsSection
