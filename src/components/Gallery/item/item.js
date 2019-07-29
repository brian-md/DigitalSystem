import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, image, className }) => (
  <figure className={className}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
