import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import ExploreImages from './ExploreImages'
import './Explore.css'
export default function Explore() {
    return (
        <>
            <Section>
                <div className="zs-explore-wrapper">
                    {ExploreImages.map((image, index) => (
                        <img
                            key={index}
                            className={image.className}
                            src={image.src}
                            alt={image.alt}
                        />
                    ))}
                    <SectionHeader
                        className="zs-explore-info"
                        title="Explore Estatein's World"
                        subtitle='Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.'
                    >
                    </SectionHeader>
                </div>
            </Section>
        </>
    )
}
