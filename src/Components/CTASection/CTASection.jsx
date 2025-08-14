import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './CTASection.module.css';

/**
 * @component CTASection
 * @description A Call To Action (CTA) section component displaying a title, subtitle, and a button.
 *              The button navigates the user to the "/Contact" page by default.
 *
 * @param {object} [props] - Optional props for customizing the CTASection.
 * @param {string} [props.title] - The main title text. Defaults to "Start Your Real Estate Journey Today".
 * @param {string} [props.subtitle] - The subtitle text. Defaults to a descriptive message about real estate services.
 * @param {string} [props.buttonText] - The text displayed on the button. Defaults to "Explore Properties".
 * @param {string} [props.buttonLink] - The link the button navigates to. Defaults to "/Contact".
 * @param {boolean} [props.showIcon=false] - Controls the visibility of an optional icon in the header.
 * @returns {JSX.Element} The CTASection component.
 *
 * @example
 * // Basic usage:
 * import CTASection from './components/CTASection/CTASection';
 *
 * function App() {
 *   return (
 *     <div>
 *       <CTASection />
 *     </div>
 *   );
 * }
 *
 * @example
 * // Customized usage with props:
 * <CTASection
 *   title="Join Our Real Estate Network"
 *   subtitle="Find the best deals and advice tailored for you."
 *   buttonText="Get Started"
 *   buttonLink="/SignUp"
 *   showIcon={true}
 * />
 */


const CTASection = () => {
    return (
        <div className={styles.ctaBackgroundWrapper}>
            <div className={styles.ctaContentContainer}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContainer}>
                        <SectionHeader
                            title="Start Your Real Estate Journey Today"
                            subtitle="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
                            titleClassName={styles.ctaTitle}
                            subtitleClassName={styles.ctaSubtitle}
                            showIcon={false}
                        />
                    </div>
                    <div className={styles.buttonsContainer}>
                        <Link to="/Contact">
                            <Button
                                variant="primary"
                                size="small"
                                className={styles.fullWidthButton}
                            >
                                Explore Properties
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
