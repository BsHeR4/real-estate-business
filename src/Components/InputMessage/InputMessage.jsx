import React from 'react';
import './InputMessage.css'

const InputMessage = () => {
    return (
        <div className={'mk-input-container'}>
            <input className={'mk-input-style'} placeholder={'Say Hello 👋'}/>
            <div className={'mk-send-icon'}>
                <img className={'mk-icon-width'} src={'/assets/imgs/Icon.svg'}  alt={'send-icon'}/>
            </div>
        </div>
    );
};

export default InputMessage;
