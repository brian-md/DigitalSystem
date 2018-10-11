import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallContainer } from './ImageCard.css';
import { Card, Image } from 'components';

const ImageCard = props => {
  const { flip, image, as, alt, title, small, wrapperStyle, visible } = props;
  const Wrapper = small ? SmallContainer : Container;
  return (
    <Wrapper
      visible={visible}
      as={as}
      flip={flip}
      style={wrapperStyle && wrapperStyle}
    >
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
  as: PropTypes.string,
};

ImageCard.defaultProps = {
  visible: true,
};

export { ImageCard };
