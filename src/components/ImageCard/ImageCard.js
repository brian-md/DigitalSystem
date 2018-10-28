import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallContainer } from './ImageCard.css';
import { Card, ImageCircle } from 'components';

const ImageCard = ({ as, ...props }) => {
  const {
    flip,
    image,

    alt,
    title,
    size,
    wrapperStyle,
    visible,
    stacked,
  } = props;
  const Wrapper = size === 'small' ? SmallContainer : Container;
  return (
    <Wrapper
      visible={visible}
      stacked={stacked}
      as={as}
      flip={flip}
      style={wrapperStyle && wrapperStyle}
    >
      <ImageCircle size={size} image={image} alt={alt ? alt : title} circle />
      <Card
        {...props}
        style={{ gridArea: 'content' }}
        small={size === 'small'}
      />{' '}
    </Wrapper>
  );
};

ImageCard.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  flip: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  visible: PropTypes.bool,
  cta: PropTypes.object,
  link: PropTypes.string,
  wrapperStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  as: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  stacked: PropTypes.bool,
};

ImageCard.defaultProps = {
  visible: true,
};

export { ImageCard };
