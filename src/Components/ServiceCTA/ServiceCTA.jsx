import React from 'react'
import BaseCard from './../BaseCard/BaseCard'
import Button from './../Button/Button'
import styles from './ServiceCTA.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function ServiceCTA({ title, description, to, className }) {

    const classes = clsx(
        styles.serviceCTA,
        styles.background,
        className,
    );

    return (
        <BaseCard padding={'large'} className={classes}>
            <div className={styles.container}>
                <h3>{title}</h3>
                <Link to={to}>
                    <Button size={'small'} variant={'secondary'}>Learn More</Button>
                </Link>
            </div>

            <p>{description}</p>
        </BaseCard>
    )
}

export default ServiceCTA
