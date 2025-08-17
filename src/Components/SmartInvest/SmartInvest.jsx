import './SmartInvest.css'
import Section from '../Section/Section.jsx'
import ServiceCTA from '../ServiceCTA/ServiceCTA'
import SectionHeader from '../SectionHeader/SectionHeader.jsx'
import FeatureCardData from './FeatureCardData .jsx'
import ServiceFeatureCard from '../ServiceFeatureCard/ServiceFeatureCard.jsx'
export default function SmartInvest() {
    return (
        <>
            <Section>
                <div className="zs-smart-invest-wrapper">
                    <div className="zs-smart-info">
                        <SectionHeader
                            title='Smart Investments, Informed Decisions'
                            subtitle="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
                        >
                        </SectionHeader>
                        <div className="zs-serviceCTA">
                            <ServiceCTA title="Unlock Your Investment Potential"
                                description="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
                                Button
                            >
                            </ServiceCTA>
                        </div>

                    </div>
                    <div className="zs-smart-cards">
                        {FeatureCardData.map((item, index) => (
                            <ServiceFeatureCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}
