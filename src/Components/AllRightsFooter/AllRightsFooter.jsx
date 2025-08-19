import './AllRightsFooter.css'
import { Link } from 'react-router-dom'
import SocialData from './SocialData'

const AllRightsFooter = () => {
    return (
        <div className='social-footer'>
            <div className='allrights'>
                <p>@2023 Estatein. All Rights Reserved.</p>
                <p>Terms & Conditions</p>
            </div>
            <div className='social-icons'>
                {SocialData.map((SocialIcon, index) => (
                    <div className='social-icon' key={index}><Link to={SocialIcon.url}>{SocialIcon.content}</Link></div>
                ))}
            </div>
        </div>
    )
}

export default AllRightsFooter