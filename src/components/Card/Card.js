import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Card.css';
import { Button, Paragraph, Title, IconTitle } from 'components';

const Card = ({
  flip,
  invert,
  title,
  description,
  cta,
  small,
  visible,
  icon,
}) => {
  const CardTitle = icon ? IconTitle : Title;
  return (
    <Container small={small} visible={visible} flip={flip}>
      <CardTitle
        icon={icon}
        line={!small}
        align="left"
        size={small ? 'small' : undefined}
        as="h3"
        invert={invert}
      >
        {title}
      </CardTitle>
      {description && (
        <Paragraph size={small ? 'small' : undefined}>{description}</Paragraph>
      )}
      {cta && (
        <Button size={small ? 'small' : undefined} invert={invert} {...cta}>
          {cta.text ? cta.text : 'Learn More'}
        </Button>
      )}
    </Container>
  );
};

Card.propTypes = {
  alt: PropTypes.string,
  flip: PropTypes.bool,
  small: PropTypes.bool,
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  visible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.object,
  icon: PropTypes.string,
};

Card.defaultProps = {
  visible: true,
};
export { Card };
