import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Container, Left, Middle, Right } from './ImageWings.css';
import {
  Button,
  Icon,
  Title,
  Card,
  Image,
  Paragraph,
  HelperText,
} from 'components';

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
    maxFeatures,
    title,
    icon,
    showTitle,
  } = props;
  return (
    <Container visible={visible}>
      <Middle>
        {title && showTitle && <Title as="h2">{title}</Title>}
        {icon && <Icon size="jumbo" icon={icon} style={{ margin: 'auto' }} />}
        <Image
          image={image}
          alt={alt ? alt : title}
          circle
          fixed={fixedImage}
          style={{ gridArea: 'image' }}
        />
        {description && <Paragraph center>{description}</Paragraph>}
        {cta && (
          <Button invert={invert} size="small" {...cta}>
            {cta.text ? (
              cta.text
            ) : (
              <>
                Learn More
                <HelperText>about {title}</HelperText>
              </>
            )}
          </Button>
        )}
      </Middle>

      <Left>
        {features &&
          features
            .slice(0, Math.floor(Math.min(features.length, maxFeatures) / 2))
            .map((feature, i) => (
              <Card as="li" small invert={invert} key={i} {...feature} />
            ))}
      </Left>
      <Right>
        {features &&
          features
            .slice(
              Math.floor(Math.min(features.length, maxFeatures) / 2),
              Math.floor(Math.min(features.length, maxFeatures) / 2) * 2
            )
            .map((feature, i) => (
              <Card as="li" small invert={invert} key={i} {...feature} />
            ))}
      </Right>
    </Container>
  );
};

ImageWings.defaultProps = {
  visible: true,
  maxFeatures: 10,
  showTitle: false,
};

ImageWings.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  features: arrayOf(PropTypes.object),
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  left: PropTypes.node,
  right: PropTypes.node,
  visible: PropTypes.bool,
  fixedImage: PropTypes.bool,
  description: PropTypes.string,
  cta: PropTypes.object,
  icon: PropTypes.string,
  maxFeatures: PropTypes.number,
  title: PropTypes.string,
  showTitle: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export { ImageWings };
