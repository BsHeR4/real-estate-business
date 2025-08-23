import React from 'react'
import ServiceCategorySection from './../../Components/ServiceCategorySection/ServiceCategorySection'
import { servicePageSections } from './../../Data/servicesPageData'
import SmartInvest from './../../Components/SmartInvest/SmartInvest.jsx'
import PageIntro from './../../Components/PageIntro/PageIntro.jsx'
import ServiceNavigationBar from './../../Components/ServiceNavigationBar/ServiceNavigationBar.jsx'
import { serviceCards } from './../../Data/servicesPageData'
function Services() {
  const propertyValue = servicePageSections.unlock_property_value
  const propertyManag = servicePageSections.effortless_property_management
  return (
    <div>
      <PageIntro title={"Elevate Your Real Estate Experience"} subtitle={"Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."} />
      <ServiceNavigationBar items={serviceCards} directAnimation={true} />
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
