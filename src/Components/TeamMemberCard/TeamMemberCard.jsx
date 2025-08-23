import React from 'react';
import BaseCard from "../BaseCard/BaseCard.jsx";
import Avatar from "../Avatar/Avatar.jsx";
import InputMessage from "../InputMessage/InputMessage.jsx";
import './TeamMemberCard.css'

const TeamMemberCard = ({ photo, icon, member }) => {
    const { name, position } = member;
    return (
        <BaseCard className={'mk-small-padding mk-team-member-card'}>
            <Avatar photo={photo} icon={icon} />
            <div className='mk-member-info-container'>
                <p className='mk-member-name'>{name}</p>
                <p className='mk-member-position'>{position}</p>
            </div>
            <InputMessage />
        </BaseCard>
    );
};

export default TeamMemberCard;
