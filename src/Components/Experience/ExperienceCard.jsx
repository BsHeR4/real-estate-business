import BaseCard from './../BaseCard/BaseCard';
import './ExperienceCard.css';

const ProcessStepCard = ({ step, title, description }) => {
    return (
        <>
            <div className="zs-Exp-card-wrapper">
                <div className="zs-card-step-wrapper">
                    <span className="zs-card-step">{step}</span>
                </div>
                <BaseCard className="zs-exp-card" padding='large'>
                        <h3 className="zs-exp-card-title">{title}</h3>
                        <p className="zs-exp-card-desc">{description}</p>
                </BaseCard>
            </div>
        </>
    );
};

export default ProcessStepCard;