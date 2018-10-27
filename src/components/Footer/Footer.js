import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

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

const Footer = ({ services, industries }) => (
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
          <h3>Main</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </NavList>
        <NavList>
          <h3>Services</h3>
          <ul>
            {services.map(service => (
              <li key={service.node.uid}>
                <Link to={`/services/${service.node.uid}`}>
                  {service.node.data.service_name.text}
                </Link>
              </li>
            ))}
          </ul>
        </NavList>
        <NavList>
          <h3>Industries</h3>
          <ul>
            {industries.map(industry => (
              <li key={industry.node.uid}>
                <Link to={`/industries/${industry.node.uid}`}>
                  {industry.node.data.industry_name.text}
                </Link>
              </li>
            ))}
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

Footer.propTypes = {
  services: PropTypes.array,
  industries: PropTypes.array,
};

const FooterWithQuery = props => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        allPrismicIndustry {
          edges {
            node {
              uid
              data {
                industry_name {
                  text
                }
              }
            }
          }
        }
        allPrismicService {
          edges {
            node {
              uid
              data {
                service_name {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Footer
        industries={data.allPrismicIndustry.edges}
        services={data.allPrismicService.edges}
        {...props}
      />
    )}
  />
);

export { FooterWithQuery as Footer };
