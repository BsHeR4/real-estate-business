import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import './Explore.css'
export default function Explore() {
    return (
        <>
        <Section>
            <div className="zs-explore-wrapper">
                <img src="\assets\imgs\explore-1.png" alt="" />
                <img src="\assets\imgs\explore-2.png" alt="" />
                <img src="\assets\imgs\explore-3.png" alt="" />
                <img src="\assets\imgs\explore-4.png" alt="" />
                <img src="\assets\imgs\explore-5.png" alt="" />
                <SectionHeader
                className="zs-explore-info"
                title="Explore Estatein's World"
                subtitle='Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.'
                >
                </SectionHeader>
                <img src="\assets\imgs\explore-6.png" alt="" />
            </div>
        </Section>
        </>
    )
}
