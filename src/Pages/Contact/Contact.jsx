import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Section from '../../components/Section/Section';

function Contact() {
  return (
    <div>
      {/* The ContactForm component goes BETWEEN the Section tags */}
      <Section>
        <ContactForm />
      </Section>
    </div>
  );
}

export default Contact;