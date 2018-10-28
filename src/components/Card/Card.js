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
  as,
  icon,
  noButton,
  style,
  html,
}) => {
  const CardTitle = icon ? IconTitle : Title;
  return (
    <Container
      style={style}
      as={as}
      small={small}
      visible={visible}
      flip={flip}
    >
      <CardTitle
        icon={icon}
        line={!small}
        align="left"
        size={small ? 'small' : undefined}
        as="h3"
        invert={invert}
        to={cta ? cta.to && cta.to : undefined}
        href={cta ? cta.href && cta.href : undefined}
      >
        {title}
      </CardTitle>
      {description && (
        <Paragraph html={html} size={small ? 'small' : undefined}>
          {description}
        </Paragraph>
      )}
      {cta &&
        !noButton && (
          <Button
            aria-label={`Learn More about ${title}`}
            size={small ? 'small' : undefined}
            invert={invert}
            {...cta}
          >
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
  link: PropTypes.string,
  as: PropTypes.string,
  style: PropTypes.object,
  noButton: PropTypes.bool,
  html: PropTypes.bool,
};

Card.defaultProps = {
  visible: true,
};
export { Card };
