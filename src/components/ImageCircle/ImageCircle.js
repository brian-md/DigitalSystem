import { Image } from 'components';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageWrapper } from './ImageCircle.css';

const ImageCircle = ({ image, alt, title, size, ...props }) => {
  return (
    <ImageWrapper size={size} {...props}>
      <Image image={image} circle alt={alt} title={title} />
    </ImageWrapper>
  );
};

ImageCircle.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export { ImageCircle };
