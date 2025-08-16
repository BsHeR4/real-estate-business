import React from 'react';
import './GetInTouchSection.css';
import Section from '../Components/Section';
import SectionHeader from '../SectionHeader/SectionHeader';
import CommonCard from '../Components/CommonCard/CommonCard';

const GetInTouchSection = () => {
return (
    <div className="ms_container_gitintouch">
        <div className="ms_card_gitintouch">
            <h1 className="ms_taitle_gitintouch">Get in Touch with Estatein</h1>
            <p className="ms_para_gitintouch">
                Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries,
                requests, or feedback you may have. Whether you're looking to buy or sell a property,
                explore investment opportunities, or simply want to connect, we're just a message away.
                Reach out to us, and let's start a conversation.
            </p>
        </div>

        
        <Section />
        <SectionHeader />
        <CommonCard />
    </div>
);
};

export default GetInTouchSection;
