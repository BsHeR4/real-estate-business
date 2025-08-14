
import { FaLocationDot } from "react-icons/fa6";
import Button from './../../Button/Button.jsx';
import './VillaHeader.css'

export default function VillaHeader() {
    return (
        <>
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
        </>
    )
}
