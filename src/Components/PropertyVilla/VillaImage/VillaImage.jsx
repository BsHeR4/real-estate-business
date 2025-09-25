
import BaseCard from './../../BaseCard/BaseCard';
import './VillaImage.css'

export default function VillaImage() {
    return (
        <>
            <BaseCard className='zs-img-mansion'>
                <picture>
                    <source media="(min-width: 1440px)" srcSet="assets/imgs/Property/mansion.png" />
                    <source media="(max-width: 576px)" srcSet="assets/imgs/Property/mansion-small.png" />
                    <img src="assets/imgs/Property/mansion.png" alt="villa " />
                </picture>
            </BaseCard>
        </>
    )
}
