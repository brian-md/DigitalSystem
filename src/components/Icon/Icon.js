import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Icon.css.js';
import { icons } from './icons';

const Icon = ({ icon, size, className, color }) => {
  const iconObject = icons[icon] ? icons[icon] : icons['warning'];
  const paths = iconObject.map((shape, i) => (
    <path key={i} d={shape.path} fill={color ? color : shape.color} />
  ));
  return (
    <Wrapper size={size} color={color} className={className}>
      <svg viewBox="0 0 1024 1024">{paths}</svg>
    </Wrapper>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  color: PropTypes.string,
  className: PropTypes.string,
};

export { Icon };
