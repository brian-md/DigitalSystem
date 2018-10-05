import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Container, Left, Middle, Right } from './imageWings.css';

import Image from 'components/image';
import Paragraph from 'components/paragraph';
import Card from 'components/card';

const ImageWings = props => {
  const { image, alt, features, fixedImage, description } = props;
  return (
    <Container>
      <Middle>
        <Image
          image={image}
          alt={alt && alt}
          circle
          fixed={fixedImage}
          style={{ gridArea: 'image' }}
        />
        {description && <Paragraph>{description}</Paragraph>}
      </Middle>

      <Left>
        {features &&
          features
            .slice(0, Math.floor(features.length / 2))
            .map((feature, i) => <Card small key={i} {...feature} />)}
      </Left>
      <Right>
        {features &&
          features
            .slice(
              Math.floor(features.length / 2),
              Math.floor(features.length / 2) * 2
            )
            .map((feature, i) => <Card small key={i} {...feature} />)}
      </Right>
    </Container>
  );
};

ImageWings.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  features: arrayOf(PropTypes.object),
  left: PropTypes.node,
  right: PropTypes.node,
  fixedImage: PropTypes.bool,
  description: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageWings;
