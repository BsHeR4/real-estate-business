import './AllRightsFooter.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'

const AllRightsFooter = () => {
    return (
    <div className='social-footer'>
        <div className='allrights'>
            <p>@2023 Estatein. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
        </div>

        <div className='social-icons'>
            <div className='social-icon'><Link to="facebook.com"><FaFacebookF/></Link></div>
            <div className='social-icon'><Link to="linkedin.com"><FaLinkedinIn/></Link></div>
            <div className='social-icon'><Link to="twitter.com"><FaTwitter/></Link></div>
            <div className='social-icon'><Link to="youtube.com"><FaYoutube/></Link></div>
        </div>
    </div>
    )
}

export default AllRightsFooter
