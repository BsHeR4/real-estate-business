import React from 'react';
import BaseCard from "../BaseCard/BaseCard.jsx";
import FeeHeader from "../FeeHeader/FeeHeader.jsx";
import './FeeCard.css'
import FeeDetails from "../FeeDetails/FeeDetails.jsx";

const FeeCard = ({title, details, columns = 2}) => {
    return (
        <BaseCard padding='large'>
            <div>
                <FeeHeader title={title}/>
            </div>
            <div className="mk-fee-details-grid"
                 style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            >
                {details.map((detail, index) => (
                    <div className="mk-fee-details-cell" key={index}>
                        <FeeDetails
                            lable={detail.lable}
                            price={detail.price}
                            note={detail.note}
                        />
                    </div>
                ))}
            </div>
        </BaseCard>
    );
};

export default FeeCard;
