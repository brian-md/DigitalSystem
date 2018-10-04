import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './card.css';

import Title from 'components/title';
import Paragraph from 'components/paragraph';
import Button from 'components/button';

const Card = ({ flip, title, description, cta, small }) => (
  <Container small={small} flip={flip}>
    <Title line={!small} align="left" size={small && 'small'} as="h3">
      {title}
    </Title>
    {description && (
      <Paragraph size={small && 'small'}>{description}</Paragraph>
    )}
    {cta && (
      <Button size={small && 'small'} {...cta}>
        {cta.text ? cta.text : 'Learn More'}
      </Button>
    )}
  </Container>
);

Card.propTypes = {
  alt: PropTypes.string,
  flip: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.object,
};

export default Card;
