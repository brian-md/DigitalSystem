import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Card.css';
import { Button, Paragraph, Title } from 'components';

const Card = ({ flip, invert, title, description, cta, small, visible }) => (
  <Container small={small} visible={visible} flip={flip}>
    <Title line={!small} align="left" size={small && 'small'} as="h3">
      {title}
    </Title>
    {description && (
      <Paragraph size={small && 'small'}>{description}</Paragraph>
    )}
    {cta && (
      <Button size={small && 'small'} invert={invert} {...cta}>
        {cta.text ? cta.text : 'Learn More'}
      </Button>
    )}
  </Container>
);

Card.propTypes = {
  alt: PropTypes.string,
  flip: PropTypes.bool,
  small: PropTypes.bool,
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  visible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.object,
};

Card.defaultProps = {
  visible: true,
};
export { Card };
