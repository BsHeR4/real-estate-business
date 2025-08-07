import Section from './../Section/Section';
import SectionHeader from './../sectionheader/SectionHeader';
import FAQItem from './FAQItem';
import faqData from './FaqData'
import IconButton from '../IconButton/IconButton';
import './FAQSection.css';

const FAQSection = () => {
    return (
        <Section>
            <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            />
            <div className="faq-container">
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <FAQItem className="card"
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
                <div className="faq-navigation">
                    <IconButton icon="arrow-left" type="arrow" variant="dark" disabled />
                    <IconButton icon="arrow-right" type="arrow" variant="darker" />
                </div>
            </div>
        </Section>
    );
};

export default FAQSection;