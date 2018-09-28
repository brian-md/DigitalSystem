import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './section.css';
import Title from 'components/title';

const Section = ({ title, children }) => (
  <Container>
    <Title size="large" as="h2" line center>
      {title}
    </Title>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
