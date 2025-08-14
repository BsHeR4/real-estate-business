import './Villa.css';

import { IoBed } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import KeyFeatureData from './KeyFeatureData.jsx';
import Section from '../Section/Section.jsx';
import Button from './../../components/Button/Button.jsx';
import BaseCard from './../BaseCard/BaseCard.jsx'

const VillaPage = () => {
    return (
        //TODO: Fix image positioning on smaller screens
        <Section>
            <div className="zs-villa-wrapper">
                <div className="zs-villa-header">
                    <div className="zs-villa-info">
                        <p className='zs-villa-name'>Seaside Serenity Villa</p>
                    </div>
                    <div className="zs-villa-cost">
                        <Button className='zs-villa-location' variant='secondary'>
                            <FaLocationDot className='zs-villa-location-icon' />
                            <p className='zs-villa-location-city'>Malibu, California</p>
                        </Button>
                        <div className="zs-villa-cost-wrapper">
                            <p className='zs-villa-price-word'>Price</p>
                            <p className='zs-villa-price'>$1,250,000</p>
                        </div>
                    </div>
                </div>
                <BaseCard className='zs-img-mansion'>
                    <img className='' src="assets\imgs\Property\mansion.png" alt="Mansion" />
                </BaseCard>

                <div className="zs-villa-details-wrapper">
                    <div className="zs-villa-details">
                        <h2 className="zs-section-title">Description</h2>
                        <p className="zs-villa-description-text">
                            Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
                        </p>
                        <div className="zs-villa-stats">
                            <div className="zs-stat-item">
                                <div className="zs-stats-info">
                                    <IoBed className="icon" />
                                    <p className='zs-stats-info-text'>Bedrooms</p>
                                </div>
                                <p className="zs-stat-value">04</p>
                            </div>
                            <div className="zs-stat-item">
                                <div className="zs-stats-info">
                                    <img src='public\assets\imgs\Property\bathtub.png' alt="Bathrooms" className="icon-img" />
                                    <p className='zs-stats-info-text'>Bathrooms</p>
                                </div>
                                <p className="zs-stat-value">03</p>
                            </div>
                            <div className="zs-stat-item">
                                <div className="zs-stats-info">
                                    <img src='public\assets\imgs\Property\area.png' alt="Area" className="icon-img" />
                                    <p className='zs-stats-info-text'>Area</p>
                                </div>
                                <p className="zs-stat-value">2,500 Square Feet</p>
                            </div>
                        </div>
                    </div>
                    <div className="zs-villa-feature">
                        <h2 className='zs-feature-title'>Key Features and Amenities</h2>
                        <ul className="zs-features-list">
                            {KeyFeatureData.map((feature, index) => (
                                <li key={index} className="zs-feature-item">
                                    <img src='assets\imgs\Property\thunder.png' alt="" className="icon-img" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};
export default VillaPage;