import React from 'react';
import {
  Wrapper,
  SiteInfo,
  Social,
  Contact,
  Nav,
  Copyright,
} from './Footer.css';
import { Section, Logo, IconButton, IconTitle } from 'components';

const Footer = () => (
  <Section
    as="footer"
    flipTop
    top
    bg="purple"
    style={{ paddingTop: '8rem', paddingBottom: '1rem' }}
  >
    <Wrapper>
      <Social>
        <IconButton href="google.com" icon="adf" />
        <IconButton href="google.com" icon="adf" />
        <IconButton href="google.com" icon="adf" />
      </Social>
      <Contact>
        <IconTitle icon="asdf" invert size="small">
          888-90-Digital
        </IconTitle>
        <IconTitle icon="asdf" invert size="small">
          info@digitalsystemsav.com
        </IconTitle>
      </Contact>
      <Nav>nav</Nav>
      <SiteInfo>
        <Logo color="#ffffff" height={5} />
      </SiteInfo>
      <Copyright>&copy; 2018 Digital Systems and Integration, Inc. </Copyright>
    </Wrapper>
  </Section>
);

Footer.propTypes = {};

export { Footer };
