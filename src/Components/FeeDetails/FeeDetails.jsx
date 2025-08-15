import React from 'react';
import './FeeDetails.css';

const FeeDetails = ({lable, price, note}) => {
    return (
        <div className='mk-fee-detail'>
            <p className={'mk-fee-lable'}>{lable}</p>
            <div className={'mk-fee-details-content'}>
                <p className='mk-fee-price'>{price}</p>
                {note && (
                    <div className='mk-fee-note-container'>
                        <p className='mk-fee-note'>{note}</p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default FeeDetails;
