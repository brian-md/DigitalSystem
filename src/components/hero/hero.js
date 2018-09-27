import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { Container } from './hero.css';
import Title from 'components/title';

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

const Hero = ({ title }) => (
  <Container>
    <ParentContainer>
      <AnimatedContainer>
        <Title as="h1">{title}</Title>
      </AnimatedContainer>
      <AnimatedContainer>
        <Title as="h1" line center invert size="xl">
          asdf
        </Title>
      </AnimatedContainer>
    </ParentContainer>
  </Container>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
