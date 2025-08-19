import styles from './Footer.module.css'
import AllRightsFooter from '../AllRightsFooter/AllRightsFooter'
import FooterLinkColumn from '../FooterLinkColumn/FooterLinkColumn'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>
                <SubscriptionForm />
                <FooterLinkColumn />
            </div>
            <AllRightsFooter />
        </footer>
    )
}

export default Footer
