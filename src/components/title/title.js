import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, line, align, invert, html }) => {
  return html ? (
    <Text
      as={as}
      size={size}
      line={line}
      align={align}
      invert={invert}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  ) : (
    <Text as={as} size={size} line={line} align={align} invert={invert}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  line: PropTypes.bool,
  size: PropTypes.oneOf(['xl', 'large']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  invert: PropTypes.bool,
  html: PropTypes.bool,
};

Title.defaultProps = {
  align: 'center',
};

export default Title;
