import React from 'react';
import PropTypes from 'prop-types';
import { Section, ContactForm, Card, Paragraph } from 'components';
import { Wrapper } from './ContactSection.css';
const ContactSection = ({ title, description, subtitle, children, bg }) => {
  return (
    <Section title={title} bg={bg}>
      <Wrapper twoCol={description || subtitle || children}>
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
        {children && children}
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
  children: PropTypes.node,
  bg: PropTypes.string,
};

export { ContactSection };
