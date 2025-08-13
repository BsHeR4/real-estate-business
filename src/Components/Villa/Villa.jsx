import './Villa.css';

import { IoBed } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import KeyFeatureData from './KeyFeatureData.jsx';
import Section from '../Section/Section.jsx';
import Button from './../../components/Button/Button.jsx';
import BaseCard from './../BaseCard/BaseCard.jsx'

const VillaPage = () => {
    return (
        <Section>
            <div className="zs-villa-wrapper">
                <div className="zs-villa-header">
                    <div className="zs-villa-info">
                        <p className='zs-villa-name'>Seaside Serenity Villa</p>
                        <Button className='zs-villa-location' variant='secondary'>
                            <FaLocationDot className='zs-villa-location-icon' />
                            <p className='zs-villa-location-city'>Malibu, California</p>
                        </Button>
                    </div>
                    <div className="zs-villa-cost">
                        <p className='zs-villa-price-word'>Price</p>
                        <p className='zs-villa-price'>$1,250,000</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
export default VillaPage;