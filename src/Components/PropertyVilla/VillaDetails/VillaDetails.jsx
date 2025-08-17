import { IoBed } from "react-icons/io5";
import KeyFeatureData from './KeyFeatureData';
import './VillaDetails.css'

export default function VillaDetails() {
    return (
        <>
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
                                <img src='public\assets\imgs\Property\bathtub.png' alt="Bathrooms" className="icon" />
                                <p className='zs-stats-info-text'>Bathrooms</p>
                            </div>
                            <p className="zs-stat-value">03</p>
                        </div>
                        <div className="zs-stat-item">
                            <div className="zs-stats-info">
                                <img src='public\assets\imgs\Property\area.png' alt="Area" className="icon" />
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
                                <img src='assets\imgs\Property\thunder.png' alt="" className="icon" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
