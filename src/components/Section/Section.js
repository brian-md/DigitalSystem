import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inner } from './Section.css';
import { Title } from 'components';

const Section = ({ title, children, bg, top, bottom }) => (
  <Container bg={bg} top={top} bottom={bottom}>
    <Inner>
      {title && (
        <Title size="large" as="h2" line center invert={bg === 'purple'}>
          {title}
        </Title>
      )}
      {children}
    </Inner>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOf(['purple', 'grey', 'white']),
  bottom: PropTypes.bool,
  top: PropTypes.bool,
};

Section.defaultProps = {
  bg: 'white',
};

export { Section };
