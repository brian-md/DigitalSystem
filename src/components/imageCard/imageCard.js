import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallContainer } from './imageCard.css';

import Image from 'components/image';
import Card from 'components/card';

const ImageCard = props => {
  const { flip, image, alt, title, small, wrapperStyle, visible } = props;
  const Wrapper = small ? SmallContainer : Container;
  return (
    <Wrapper visible={visible} flip={flip} style={wrapperStyle && wrapperStyle}>
      <Image small={small} image={image} alt={alt ? alt : title} circle />
      <Card {...props} />{' '}
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
  visible: PropTypes.bool,
  cta: PropTypes.object,
  wrapperStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

ImageCard.defaultProps = {
  visible: true,
};

export default ImageCard;
