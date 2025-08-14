import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import ClientCard from '../ClientCard/ClientCard';
import styles from './ClientsSection.module.css';

/**
 * @component ClientsSection
 * @description A container component that assembles and displays the 'Our Valued Clients' section,
 * It includes the section header and a grid of client cards, In a real application,
 * this component would be responsible for fetching the client data
 * * @returns {JSX.Element} The fully rendered 'Our Valued Clients' section
 */
function ClientsSection() {
    return (
        <Section>
            <SectionHeader title={'Our Valued Clients'}
                subtitle={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`}
                className={'p-b-80'}
            />

            <div className={styles.container}>
                <ClientCard year={'2019'} clientName={'ABC Coroporation'} domain={'Commercial Real Estate'} category={'Luxury Home Development'} say={`Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`} />
            </div>
        </Section>
    )
}

export default ClientsSection
