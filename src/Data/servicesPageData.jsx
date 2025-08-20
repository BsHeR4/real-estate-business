import React from 'react'
import NetworkIcon from './../../public/assets/imgs/ServicesPage/network.svg?react'
import EaseIcon from './../../public/assets/imgs/ServicesPage/ease.svg?react'
import FinancialIcon from './../../public/assets/imgs/ServicesPage/financial.svg?react'
import HarmonyIcon from './../../public/assets/imgs/ServicesPage/harmony.svg?react'
import LegalIcon from './../../public/assets/imgs/ServicesPage/legal.svg?react'
import MarketingIcon from './../../public/assets/imgs/ServicesPage/marketing.svg?react'
import SuccessIcon from './../../public/assets/imgs/ServicesPage/success.svg?react'
import WizardryIcon from './../../public/assets/imgs/ServicesPage/wizardry.svg?react'


export const unlockPropertyValueData = [
    {
        icon: <NetworkIcon />,
        title: "Valuation Mastery",
        description: "Discover the true worth of your property with our expert valuation services."
    },
    {
        icon: <MarketingIcon />,
        title: "Strategic Marketing",
        description: "Selling a property requires more than just a listing; it demands a strategic marketing approach."
    },
    {
        icon: <WizardryIcon />,
        title: "Negotiation Wizardry",
        description: "Negotiating the best deal is an art, and our negotiation experts are masters of it."
    },
    {
        icon: <SuccessIcon />,
        title: "Closing Success",
        description: "A successful sale is not complete until the closing. We guide you through the intricate closing process."
    },
];

const effortlessPropertyManagementData = [
    {
        icon: <HarmonyIcon />,
        title: "Tenant Harmony",
        description: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
    },
    {
        icon: <EaseIcon />,
        title: "Maintenance Ease",
        description: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
    },
    {
        icon: <FinancialIcon />,
        title: "Financial Peace of Mind",
        description: "Managing property finances can be complex. Our financial experts take care of rent collection"
    },
    {
        icon: <LegalIcon />,
        title: "Legal Guardian",
        description: "Stay compliant with property laws and regulations effortlessly."
    },
];

export const servicePageSections = {

    unlock_property_value: {
        section_header: {
            title: "Unlock Property Value",
            subtitle: "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
        },
        features_data: unlockPropertyValueData,
        cta_data: {
            title: "Unlock the Value of Your Property Today",
            description: "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
        }
    },

    effortless_property_management: {
        section_header: {
            title: "Effortless Property Management",
            subtitle: "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
        },
        features_data: effortlessPropertyManagementData,
        cta_data: {
            title: "Experience Effortless Property Management",
            description: "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
        }
    },
}

export const serviceCards =
    [
        {
            id: 1,
            title: "Find Your Dream Home",
            icon: "./../../../public/assets/imgs/service-icon-1.svg",
        },
        {
            id: 2,
            title: "Unlock Property Value",
            icon: "./../../../public/assets/imgs/service-icon-2.svg",
        },
        {
            id: 3,
            title: "Effortless Property Management",
            icon: "./../../../public/assets/imgs/service-icon-3.svg",
        },
        {
            id: 4,
            title: "Smart Investments, Informed Decisions",
            icon: "./../../../public/assets/imgs/service-icon-4.svg",
        },
    ]