import styles from './FooterLinkColumn.module.css'
import { navigationLinks } from './../../Data/NavigationData'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'
import { Link } from 'react-router-dom'
import { div, ul } from 'framer-motion/client'

const FooterLinkColumn = ({ items }) => {
    return (
        <div className={styles.footerColumns}>
            {navigationLinks.map((navigationLink, index) => (
                <div className={styles.footerColumn}>
                    <h3>{navigationLink.title}</h3>
                    <ul>
                        {(navigationLink.sections).map((section) => (
                            <li>
                                <Link to={section.to}>{section.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterLinkColumn
