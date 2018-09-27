import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, line, center, invert }) => {
  return (
    <Text as={as} size={size} line={line} center={center} invert={invert}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  line: PropTypes.bool,
  size: PropTypes.oneOf(['xl', 'large']),
  center: PropTypes.bool,
  invert: PropTypes.bool,
};

export default Title;
