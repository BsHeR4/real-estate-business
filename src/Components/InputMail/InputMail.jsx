import './InputMail.css'
import EmailIcon from './../../assets/icons/email.svg?react'

const InputMail = () => {
    return (
        <div className="input-container">
            <div className='input-style'>
                <EmailIcon />
                <input type="text" placeholder="Enter your email" className='form-input' />
            </div>
            <button><img src="./assets/imgs/Icon1.svg" alt="" className=".icon1" /></button>
        </div>
    )
}

export default InputMail

