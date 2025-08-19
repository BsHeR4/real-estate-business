import React from 'react'
import BaseCard from './../BaseCard/BaseCard'
import Button from './../Button/Button'
import styles from './ServiceCTA.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function ServiceCTA({ title, description, to, className, variant = "wide" }) {

    const classes = clsx(
        styles.serviceCTA,
        styles.background,
        styles[variant],
        className,
    );

    return (
        <BaseCard padding={'large'} className={classes}>
            {variant == "wide" ?
                (
                    <>
                        <div className={styles.container}>
                            <h3>{title}</h3>
                            <Link to={to}>
                                <Button size={'small'} variant={'secondary'} className={styles.fullWidth}>Learn More</Button>
                            </Link>
                        </div>

                        <p>{description}</p>
                    </>
                ) : (
                    <>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Link to={to}>
                            <Button size={'small'} variant={'secondary'} fullWidth={true}>Learn More</Button>
                        </Link>
                    </>
                )
            }

        </BaseCard>

    )
}

export default ServiceCTA
