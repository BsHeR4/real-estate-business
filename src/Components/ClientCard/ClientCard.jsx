import React from 'react'
import styles from './ClientCard.module.css';
import Button from '../Button/Button';
import BaseCard from '../BaseCard/BaseCard';
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineBolt } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import ClientInfo from '../ClientInfo/ClientInfo.jsx';


/**
 * @component ClientCard
 * @description A component that displays a detailed card for a single client, including their information and a testimonial
 * * @param {object} props - The component's props
 * @param {string|number} props.year - The year the client relationship began
 * @param {string} props.clientName - The name of the client
 * @param {string} props.domain - The business domain of the client
 * @param {string} props.category - The category of service provided to the client
 * @param {string} props.say - A quote or testimonial from the client
 * @param {string} props.websiteLink - The URL for the client's website
 * * @returns {JSX.Element} A styled card component for a client
 */
function ClientCard({ year, clientName, domain, category, say, websiteLink, ...props }) {

    return (
        <div className={styles.clientCard}>
            <BaseCard padding={'large'} className={`card-shadow`}>
                <div className={styles.container}>
                    <div>
                        <span>since {year}</span>
                        <h3>{clientName}</h3>
                    </div>
                    <Link to={websiteLink}>
                        <Button variant={'dark'} size={'small'} className={styles.fullWidth}>Visit Website</Button>
                    </Link>
                </div>
                <div className={styles.infoContainer}>
                    <ClientInfo title={'Domain'} info={domain} icon={<GrAppsRounded />} />
                    <ClientInfo title={'Category'} info={category} icon={<HiOutlineBolt />} leftBorder={true} />
                </div>

                <BaseCard padding={'medium'} className={styles.baseCardParagraph}>
                    <span>What They Said</span>
                    <p>{say}</p>
                </BaseCard>

            </BaseCard >
        </div >
    )
}

export default ClientCard
