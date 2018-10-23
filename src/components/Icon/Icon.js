import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Icon.css.js';
import { icons } from './icons';

const Icon = ({ icon, size, className, color, style }) => {
  const iconObject = icons[icon] ? icons[icon] : icons['warning'];
  const paths = iconObject.map((shape, i) => (
    <path key={i} d={shape.path} fill={color ? color : shape.color} />
  ));
  return (
    <Wrapper size={size} color={color} className={className} style={style}>
      <svg viewBox="0 0 1024 1024">{paths}</svg>
    </Wrapper>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['medium', 'small', 'large', 'jumbo']),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export { Icon };
