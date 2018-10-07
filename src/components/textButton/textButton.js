import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button'

const TextButton = ({ children }) => {
  return <
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  fit: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'regular', 'medium', 'large']),
};

export default TextButton;
