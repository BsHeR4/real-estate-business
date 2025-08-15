import React from 'react'
import BaseCard from './../BaseCard/BaseCard'
import Button from './../Button/Button'
import styles from './ServiceCTA.module.css'

function ServiceCTA({ title, description }) {
    return (
        <div>
            <BaseCard padding={'large'} className={`${styles.serviceCTA} ${styles.background}`}>
                <div className={styles.container}>
                    <h3>{title}</h3>
                    <Button size={'small'} variant={'secondary'}>Learn More</Button>
                </div>

                <p>{description}</p>
            </BaseCard>
        </div >
    )
}

export default ServiceCTA
