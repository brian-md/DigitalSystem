import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { Container } from './hero.css';
import Title from 'components/title';
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

const Hero = ({ title, image }) => (
  <Container>
    <ParentContainer>
      <AnimatedContainer>
        <Title as="h1">LOGO</Title>
      </AnimatedContainer>
      <AnimatedContainer>
        <Title as="h1" line center invert size="xl" html>
          {title}
        </Title>
      </AnimatedContainer>
      <AnimatedContainer>button</AnimatedContainer>
      <Img
        fluid={image}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          minWidth: '100vw',
          minHeight: '100%',
          zIndex: -1,
        }}
      />
    </ParentContainer>
  </Container>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
};

export default Hero;
