import './AchievementCard.css'
import BaseCard from '../BaseCard/BaseCard'


const AchievementCard = ({title , description}) => {
    return (
        <>
            
        
                <BaseCard padding='large' className="card_style">
                        
                    <div className='card_text'>
                            <h3>{title}</h3>
                            <p>{description}</p>
                    </div>

                        
                    
                </BaseCard>
        
        
        
            
        </> 
    )
}

export default AchievementCard




