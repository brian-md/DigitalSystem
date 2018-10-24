import React from 'react';
import PropTypes from 'prop-types';
import { Section, ContactForm } from 'components';
const ContactSection = ({ title }) => {
  return (
    <Section title={title && 'Get in Touch'}>
      <ContactForm />
    </Section>
  );
};

ContactSection.propTypes = {
  title: PropTypes.string,
};

export { ContactSection };
