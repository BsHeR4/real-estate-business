import styles from './FooterLinkColumn.module.css'
import { navigationLinks } from './../../Data/NavigationData'
import { Link } from 'react-router-dom'

const FooterLinkColumn = ({ items }) => {
    return (
        <div className={styles.footerColumns}>
            {navigationLinks.map((navigationLink, index) => (
                <div key={index} className={styles.footerColumn}>
                    <h3>{navigationLink.title}</h3>
                    <ul>
                        {(navigationLink.sections).map((section, index) => (
                            <li key={index}>
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
