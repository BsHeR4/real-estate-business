import './Villa.css';
import Section from '../Section/Section.jsx';
import VillaHeader from './../PropertyVilla/VillaHeader/VillaHeader.jsx'
import VillaImage from './../PropertyVilla/VillaImage/VillaImage.jsx'
import VillaContent from './../PropertyVilla/VillaDetails/VillaDetails.jsx'

const Villa = () => {
    return (
        <>
            <Section id={'portfolio'}>
                <div className="zs-villa-wrapper">
                    <VillaHeader />
                    <VillaImage />
                    <VillaContent />
                </div>
            </Section>
        </>
    );
};
export default Villa;