import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inner } from './section.css';
import Title from 'components/title';

const Section = ({ title, children, bg, top, bottom }) => (
  <Container bg={bg} top={top} bottom={bottom}>
    <Inner>
      <Title size="large" as="h2" invert = {bg === "purple"} line center>
        {title}
      </Title>
      {children}
    </Inner>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOf(['purple', 'grey', 'white']),
  bottom: PropTypes.bool,
  top: PropTypes.bool,
};

Section.defaultProps = {
  bg: 'white',
};

export default Section;
