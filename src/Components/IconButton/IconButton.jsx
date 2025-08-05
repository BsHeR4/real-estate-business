import './IconButton.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const icons = {
    facebook: <FaFacebookF />,
    linkedin: <FaLinkedinIn />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />,
    'arrow-left': <FaArrowLeft />,
    'arrow-right': <FaArrowRight />
};

const IconButton = ({ icon, variant = 'dark', disabled = false, type = 'arrow' }) => {
    const buttonClass = `zs-icon-button ${type} ${variant} ${disabled ? 'disabled' : ''}`
    return (
        <button
            className={buttonClass}
            disabled={disabled}
            icon={icon}
        >
            {icons[icon]}
        </button>
    );
};

export default IconButton;