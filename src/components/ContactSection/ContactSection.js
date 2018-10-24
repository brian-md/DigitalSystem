import React from 'react';
import PropTypes from 'prop-types';
import { Section, ContactForm, Card, Paragraph } from 'components';
import { Wrapper } from './ContactSection.css';
const ContactSection = ({ title, description, subtitle }) => {
  return (
    <Section title={title}>
      <Wrapper twoCol={description || subtitle}>
        {subtitle && (
          <Card
            title={subtitle}
            style={{ gridArea: 'message' }}
            description={description}
          />
        )}
        {!subtitle &&
          description && (
            <Paragraph style={{ margin: 'auto' }}>{description}</Paragraph>
          )}
        <ContactForm />
      </Wrapper>
    </Section>
  );
};
ContactSection.defaultProps = {
  title: 'Get in Touch',
};
ContactSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export { ContactSection };
