import React from 'react';
import './PropertyServices.css';

const PropertyServices = () => {
    return (
        
    <div className="ms-property-services-container">

        <div className="ms-property-services-wrapper">
        

            <div className="ms-property-service-card">
                <div className="ms-service-icon-container">
                    <div className="ms-service-icon-bg">
                        <img src="/public/assets/img/service-icon-1.svg" alt="ابحث عن منزل" className="ms-service-icon" />
                    </div>
                </div>
                <div className="ms-service-content">
                    <p className="ms-service-description ms-font-color">Find Your Dream Home</p>
                </div>
                <div className="ms-service-arrow">
                    <img src="/public/assets/img/arrow-icon.svg" alt="arrow-icon" className="ms-arrow-icon" />
                </div>
            </div>
        <div className="ms-property-service-card">
            <div className="ms-service-icon-container">
                <div className="ms-service-icon-bg">
                    <img src="/public/assets/img/service-icon-2.svg" alt="service-icon" className="ms-service-icon" />
                </div>
            </div>
            <div className="ms-service-content">
                <p className="ms-service-description ms-font-color"> Unlock Property Value  </p>
            </div>
            <div className="ms-service-arrow">
                <img src="/public/assets/img/arrow-icon.svg" alt="" className="ms-arrow-icon" />
            </div>
        </div>
        <div className="ms-property-service-card">
            <div className="ms-service-icon-container">
                <div className="ms-service-icon-bg">
                    <img src="/public/assets/img/service-icon-3.svg" alt="service-icon" className="ms-service-icon" />
                </div>
            </div>
            <div className="ms-service-content">
                <p className="ms-service-description ms-font-color">Effortless Property Management</p>
            </div>
            <div className="ms-service-arrow">
                <img src="/public/assets/img/arrow-icon.svg" alt="" className="ms-arrow-icon" />
            </div>
        </div>
            <div className="ms-property-service-card">
                <div className="ms-service-icon-container">
                    <div className="ms-service-icon-bg">
                        <img src="/public/assets/img/service-icon-4.svg" alt="service-icon" className="ms-service-icon" />
                    </div>
                </div>
                <div className="ms-service-content">
                    <p className="ms-service-description ms-font-color">Smart Investments, Informed Decisions</p>
                </div>
                <div className="ms-service-arrow">
                    <img src="/public/assets/img/arrow-icon.svg" alt="" className="ms-arrow-icon" />
                </div>
            </div>
        </div>
    </div>
);
};

export default PropertyServices;