import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Container, Left, Middle, Right } from './imageWings.css';

import Image from 'components/image';
import Button from 'components/button';
import Paragraph from 'components/paragraph';
import Card from 'components/card';

const ImageWings = props => {
  const {
    image,
    alt,
    features,
    fixedImage,
    invert,
    description,
    visible,
    cta,
  } = props;
  return (
    <Container visible={visible}>
      <Middle>
        <Image
          image={image}
          alt={alt && alt}
          circle
          fixed={fixedImage}
          style={{ gridArea: 'image' }}
        />
        {description && <Paragraph>{description}</Paragraph>}
        {cta && (
          <Button invert={invert} size="small" {...cta}>
            {cta.text ? cta.text : 'Learn More'}
          </Button>
        )}
      </Middle>

      <Left>
        {features &&
          features
            .slice(0, Math.floor(features.length / 2))
            .map((feature, i) => (
              <Card small invert={invert} key={i} {...feature} />
            ))}
      </Left>
      <Right>
        {features &&
          features
            .slice(
              Math.floor(features.length / 2),
              Math.floor(features.length / 2) * 2
            )
            .map((feature, i) => (
              <Card small invert={invert} key={i} {...feature} />
            ))}
      </Right>
    </Container>
  );
};

ImageWings.defaultProps = {
  visible: true,
};

ImageWings.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  features: arrayOf(PropTypes.object),
  invert: PropTypes.bool,
  left: PropTypes.node,
  right: PropTypes.node,
  visible: PropTypes.bool,
  fixedImage: PropTypes.bool,
  description: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageWings;
