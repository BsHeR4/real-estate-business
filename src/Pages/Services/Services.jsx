import React from 'react'
import ServiceCategorySection from './../../Components/ServiceCategorySection/ServiceCategorySection'
import { servicePageSections } from './../../Data/servicesPageData'
import SmartInvest from './../../Components/SmartInvest/SmartInvest.jsx'
function Services() {
  const propertyValue = servicePageSections.unlock_property_value
  const propertyManag = servicePageSections.effortless_property_management
  return (
    <div>
      <ServiceCategorySection
        title={propertyValue.section_header.title}
        subtitle={propertyValue.section_header.subtitle}
        features={propertyValue.features_data}
        ctaData={propertyValue.cta_data}
      />

      <ServiceCategorySection
        title={propertyManag.section_header.title}
        subtitle={propertyManag.section_header.subtitle}
        features={propertyManag.features_data}
        ctaData={propertyManag.cta_data}
      />
      <SmartInvest />
    </div>
  )
}

export default Services
