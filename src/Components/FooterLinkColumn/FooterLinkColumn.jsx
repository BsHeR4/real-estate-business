import styles from './FooterLinkColumn.module.css'
import { footerData } from './../../Data/footerData'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'
import { Link } from 'react-router-dom'
import { div, ul } from 'framer-motion/client'

const FooterLinkColumn = ({ items }) => {
    return (
        <div className={styles.footerColumns}>
            {footerData.map((item, index) => (
                <div className={styles.footerColumn}>
                    <h3>{item.title}</h3>
                    <ul>
                        {(item.sections).map((section) => (
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
