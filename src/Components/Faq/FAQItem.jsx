import BaseCard from '../BaseCard/BaseCard';
import Button from '../Button/Button';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
    return (
        <BaseCard padding="large">
                <h3 className='zs-question'>{question}</h3>
                <p className='zs-answer'>{answer}</p>
                <Button className='fullWidth' variant='dark'>Read More</Button>
        </BaseCard>
    );
};

export default FAQItem;
