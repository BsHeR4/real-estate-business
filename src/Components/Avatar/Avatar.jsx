import React from 'react';
import IconButton from "../IconButton/IconButton.jsx";
import './Avatar.css';

const Avatar = ({photo, icon}) => {
    return (
        <div className='mk-avatar-container'>
            <img className='mk-avatar' src={photo} alt='member' />
            <IconButton icon={icon} className={'mk-twitter-icon'}/>
        </div>
    );
};

export default Avatar;
