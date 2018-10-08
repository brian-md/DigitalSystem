import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import {
  Container,
  SmallContainer,
  ImageWrapper,
  ButtonWrapper,
} from './Hero.css';
import { Button, Paragraph, Title } from 'components';

import Img from 'gatsby-image';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '25px',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const ParentContainer = posed.div({
  enter: { staggerChildren: 200 },
});

const HeroContents = ({
  title,
  image,
  subtitle,
  logo,
  small,
  primaryAction,
  secondaryAction,
}) => (
  <ParentContainer>
    {logo && (
      <AnimatedContainer>
        <Title as="h1">LOGO</Title>
      </AnimatedContainer>
    )}
    <AnimatedContainer>
      <Title as="h1" line align="center" invert size="xl" html>
        {title}
      </Title>
    </AnimatedContainer>
    {subtitle && (
      <AnimatedContainer>
        <Paragraph size="medium">{subtitle}</Paragraph>
      </AnimatedContainer>
    )}
    {(primaryAction || secondaryAction) && (
      <AnimatedContainer>
        <ButtonWrapper>
          {secondaryAction && (
            <Button medium={0} invert={1} {...secondaryAction}>
              {secondaryAction.desc}
            </Button>
          )}
          {primaryAction && (
            <Button medium={0} primary={1} {...primaryAction}>
              {primaryAction.desc}
            </Button>
          )}
        </ButtonWrapper>
      </AnimatedContainer>
    )}
    <ImageWrapper small={small}>
      <Img fluid={image} style={{ minHeight: '100vh' }} />
    </ImageWrapper>
  </ParentContainer>
);

HeroContents.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  subtitle: PropTypes.string,
  small: PropTypes.bool,
  logo: PropTypes.bool,
  primaryAction: PropTypes.object,
  secondaryAction: PropTypes.object,
};

const Hero = props =>
  props.small ? (
    <SmallContainer>
      <HeroContents {...props} />
    </SmallContainer>
  ) : (
    <Container>
      <HeroContents {...props} />
    </Container>
  );

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  subtitle: PropTypes.string,
  small: PropTypes.bool,
  logo: PropTypes.bool,
  primaryAction: PropTypes.object,
  secondaryAction: PropTypes.object,
};

export { Hero };
