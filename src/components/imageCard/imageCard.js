import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallContainer } from './imageCard.css';

import Image from 'components/image';
import Card from 'components/card';

const ImageCard = props => {
  const { flip, image, alt, title, small, wrapperStyle } = props;
  const Wrapper = small ? SmallContainer : Container;
  return (
    <Wrapper flip={flip} style={wrapperStyle && wrapperStyle}>
      <Image small={small} image={image} alt={alt ? alt : title} circle />
      <Card {...props} />
    </Wrapper>
  );
};

ImageCard.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  flip: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  small: PropTypes.bool,
  cta: PropTypes.object,
  wrapperStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

export default ImageCard;
