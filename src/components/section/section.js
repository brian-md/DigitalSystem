import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inner } from './section.css';
import Title from 'components/title';

const Section = ({ title, children }) => (
  <Container>
    <Inner>
      <Title size="large" as="h2" line center>
        {title}
      </Title>
      {children}
    </Inner>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
