import React from 'react';
import PropTypes from 'prop-types';
import { Container, SmallImage } from './image.css';
import Img from 'gatsby-image';

const Image = ({ image, circle, alt, small, fixed, wrapperStyle }) => {
  const Wrapper = small ? SmallImage : Container;
  return (
    <Wrapper style={wrapperStyle && wrapperStyle} circle={circle}>
      <Img
        fluid={!fixed && image}
        fixed={fixed && image}
        style={{}}
        alt={alt}
      />
    </Wrapper>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  fixed: PropTypes.bool,
  image: PropTypes.object.isRequired,
  circle: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  small: PropTypes.bool,
};

export default Image;
