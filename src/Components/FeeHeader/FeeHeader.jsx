import React from 'react';
import './FeeHeader.css'

const FeeHeader = ({title}) => {
    return (
        <div className={'mk-fee-header'}>
            <p className={'mk-fee-title'}>{title}</p>
            <button className={'mk-fee-button'}>Learn More</button>
        </div>
    );
};

export default FeeHeader;
