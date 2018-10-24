import React from 'react';
import {
  Wrapper,
  SiteInfo,
  Social,
  Contact,
  Nav,
  Copyright,
  NavList,
} from './Footer.css';
import { Section, Logo, IconButton, Paragraph, IconTitle } from 'components';

const Footer = () => (
  <Section
    as="footer"
    flipTop
    top
    bg="purple"
    width={95}
    style={{ paddingTop: '8rem', paddingBottom: '1rem' }}
  >
    <Wrapper>
      <Social>
        <IconButton size="medium" href="google.com" icon="facebook" />
        <IconButton size="medium" href="google.com" icon="linkedin" />
      </Social>
      <Contact>
        <IconTitle icon="phone" invert size="small" href="tel:888-90-Digital">
          888-90-Digital
        </IconTitle>
        <IconTitle
          icon="email"
          invert
          size="small"
          href="mailto:info@digitalsystemsav.com"
        >
          info@digitalsystemsav.com
        </IconTitle>
      </Contact>
      <Nav>
        <NavList>
          <h3>Website</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </NavList>
        <NavList>
          <h3>Services</h3>
          <ul>
            <li>Contol4</li>
            <li>Digital Signage</li>
            <li>Audio</li>
            <li>Networking</li>
          </ul>
        </NavList>
        <NavList>
          <h3>Industries</h3>
          <ul>
            <li>Contol4</li>
            <li>Digital Signage</li>
            <li>Audio</li>
            <li>Networking</li>
          </ul>
        </NavList>
      </Nav>
      <SiteInfo>
        <Logo color="#ffffff" height={5} />
        <Paragraph>
          We design, install, and service audio-video and other technology
          systems for homes and businesses in the Chicagoland area.
        </Paragraph>
        <address>2545 W Diversey Pkwy Suite 205 Chicago, IL 60647</address>
      </SiteInfo>
      <Copyright>&copy; 2018 Digital Systems and Integration, Inc. </Copyright>
    </Wrapper>
  </Section>
);

Footer.propTypes = {};

export { Footer };
