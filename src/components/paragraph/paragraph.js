import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './paragraph.css';

const Paragraph = ({ children, as = 'p', size, center, html }) => {
  return html ? (
    <Text
      as={as}
      size={size}
      center={center}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  ) : (
    <Text as={as} size={size} center={center}>
      {children}
    </Text>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['xl', 'large', 'medium', 'small']),
  center: PropTypes.bool,
  html: PropTypes.bool,
};

export default Paragraph;
