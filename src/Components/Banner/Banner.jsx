import { useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";
import './Banner.css'

export default function Banner() {
    const [hide, setHide] = useState(true);
    const handleClose = () => {
        setHide(false);
    };
    if (!hide) {
        return null;
    }
    return (
        <>
            <div className="zs-banner d-flex">
                <p className='zs-banner-desc d-flex'>✨Discover Your Dream Property with Estatein <a href="#">Learn More</a></p>
                <button onClick={handleClose} className='zs-close-button d-flex'><HiOutlineXMark /></button>
            </div>
        </>
    )
}
