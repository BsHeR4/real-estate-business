import './AchievementsSection.css'
import { AchievementCardData } from '../AchievementCard/AchievementCardData'
import Section from '../../components/Section/Section'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AchievementCard from '../AchievementCard/AchievementCard'

const AchievementsSection = () => {
    return (
    <Section>
        <SectionHeader
        title="Our Achievements"
        subtitle="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        />
        
        
            <div className='achiv_card'>
                {AchievementCardData.map((card, index) => (
                    <AchievementCard 
                        key={index}
                        title={card.title}
                        description={card.description}
            />
        ))}
            </div>
        
        
    </Section>
    )
}

export default AchievementsSection
