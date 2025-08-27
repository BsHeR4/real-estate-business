import React, { useState, useEffect } from 'react';
import Villa from './../../Components/Villa/Villa'
import ComprehensiveSection from './../../Components/ComprehensiveSection/ComprehensiveSection'
import FeeCard from './../../Components/FeeCard/FeeCard'
import { feeCardsData } from './../../Data/propertyDetailsData'
import { getPropertiesFromStorage } from '../../Services/storageService';
import FeaturedPropertiesSection from '../../components/FeaturedPropertiesSection/FeaturedPropertiesSection';

function PropertyDetails() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const data = getPropertiesFromStorage();
    setProperties(data);
  }, []);


  return (
    <div>
      <Villa />
      <ComprehensiveSection
        title={'Comprehensive Pricing Details'}
        subtitle={'At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision'}
        feeCardsData={feeCardsData}
      >
        <FeeCard details={feeCardsData[0].details} title={feeCardsData[0].title} />
        <FeeCard details={feeCardsData[1].details} title={feeCardsData[1].title} columns={1} />
        <FeeCard details={feeCardsData[2].details} title={feeCardsData[2].title} />
        <FeeCard details={feeCardsData[3].details} title={feeCardsData[3].title} />
      </ComprehensiveSection>

      {properties.length > 0 && (
        <FeaturedPropertiesSection properties={properties} />
      )}

    </div>
  )
}

export default PropertyDetails
