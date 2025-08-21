import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import OfficeLocationSection from '../../Components/OfficeLocationSection/OfficeLocationSection';
import OfficeLocationCard from '../../Components/OfficeLocationCard/OfficeLocationCard';
import Section from '../../components/Section/Section';
import { officeLocations } from './../../Data/contactData'
import PageIntro from './../../Components/PageIntro/PageIntro.jsx'
import ServiceNavigationBar from './../../Components/ServiceNavigationBar/ServiceNavigationBar.jsx'
import Explore from './../../Components/Explore/Explore.jsx'
import { contactCards } from './../../Data/contactData.jsx'

function Contact() {
  return (
    <div>
      <PageIntro />
      <ServiceNavigationBar />
      <Section>
        <ContactForm />
      </Section>
      <OfficeLocationSection
        title={"Discover Our Office Locations"}
        subtitle={"Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"}
        buttons={[
          {
            size: 'small',
            variant: 'dark',
            text: "All"
          },
          {
            size: 'small',
            variant: 'dark',
            text: "Regional"
          },
          {
            size: 'small',
            variant: 'dark',
            text: "International"
          },
        ]}
      >
        <OfficeLocationCard details={officeLocations} />
      </OfficeLocationSection>
      <Explore />

    </div>
  );
}

export default Contact;