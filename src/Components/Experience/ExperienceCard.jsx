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
                        <div className="zs-card-content">
                            <h3 className="zs-exp-card-title">{title}</h3>
                            <p className="zs-exp-card-desc">{description}</p>
                        </div>
                </BaseCard>
            </div>
        </>
    );
};

export default ProcessStepCard;