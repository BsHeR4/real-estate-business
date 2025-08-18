import SectionHeader from './../sectionheader/SectionHeader'
import Section from './../Section/Section'
import './Explore.css'
export default function Explore() {
    return (
        <>
            <Section>
                {/* TODO: make the image dynamic by moving it to another file */}
                <div className="zs-explore-wrapper">
                    <img src="\assets\imgs\explore-1.png" alt="" className='zs-explore-img zs-explore-img1' />
                    <img src="\assets\imgs\explore-2.png" alt="" className='zs-explore-img zs-explore-img2' />
                    <img src="\assets\imgs\explore-3.png" alt="" className='zs-explore-img zs-explore-img3' />
                    <img src="\assets\imgs\explore-4.png" alt="" className='zs-explore-img zs-explore-img4' />
                    <img src="\assets\imgs\explore-5.png" alt="" className='zs-explore-img zs-explore-img5' />
                    <SectionHeader
                        className="zs-explore-info"
                        title="Explore Estatein's World"
                        subtitle='Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.'
                    >
                    </SectionHeader>
                    <img src="\assets\imgs\explore-6.png" alt="" className='zs-explore-img zs-explore-img6' />
                </div>
            </Section>
        </>
    )
}
