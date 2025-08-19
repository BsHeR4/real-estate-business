import './FooterLinkColumn.css'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'
import { Link } from 'react-router-dom'

const FooterLinkColumn = () => {
    return (
        <div className='footer_list'>
            <SubscriptionForm />
            <div className="footer-columns">
                <div className='footer-column'>
                    <h4><Link to="/">Home</Link></h4>
                    <ul className='UlStyle'>
                        <li><Link to="">Hero Section</Link></li>
                        <li><Link to="">Features</Link></li>
                        <li><Link to="">Properties</Link></li>
                        <li><Link to="">Testimonials</Link></li>
                        <li><Link to="">FAQ’s</Link></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4><Link to="/AboutUs">About Us</Link></h4>
                    <ul className='UlStyle'>
                        <li><Link to="">Our Story</Link></li>
                        <li><Link to="">Our Works</Link></li>
                        <li><Link to="">How It Works</Link></li>
                        <li><Link to="">Our Team</Link></li>
                        <li><Link to="">Our Clients</Link></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4><Link to="/PropertyDetails">Properties</Link></h4>
                    <ul className='UlStyle'>
                        <li><Link to="">Portfolio</Link></li>
                        <li><Link to="">Categories</Link></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4><Link to="/Services">Services</Link></h4>
                    <ul className='UlStyle'>
                        <li><Link to="">Valuation Mastery</Link></li>
                        <li><Link to="">Strategic Marketing</Link></li>
                        <li><Link to="">Negotiation Wizardry</Link></li>
                        <li><Link to="">Closing Success</Link></li>
                        <li><Link to="">Property Management</Link></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4><Link to="/Contact">Contact Us</Link></h4>
                    <ul className='UlStyle'>
                        <li><Link to="">Contact Form</Link></li>
                        <li><Link to="">Our Offices</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterLinkColumn