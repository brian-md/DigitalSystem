import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './image.css';
import Img from 'gatsby-image';

const Image = ({ image, circle }) => (
  <Container circle={circle}>
    <Img fluid={image} style={{}} />
  </Container>
);

Image.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  circle: PropTypes.bool,
};

export default Image;
