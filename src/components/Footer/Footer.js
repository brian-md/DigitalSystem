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
        <li>
          <IconButton
            size="medium"
            href="https://www.facebook.com/digitalsystemsandintegration/"
            icon="facebook"
            aria-label="facebook"
          />
        </li>
        <li>
          <IconButton
            size="medium"
            href="https://www.linkedin.com/company/digital-systems-and-integration"
            icon="linkedin"
            aria-label="linkedin"
          />
        </li>
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
          <ul role="menu">
            <li role="none">
              <Link role="menuitem" to="/">
                Home
              </Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/support">
                Support
              </Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/about-us">
                About Us
              </Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/blog">
                Blog
              </Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </NavList>
        <NavList>
          <h3> Who We Serve </h3>{' '}
          <ul role="menu">
            {' '}
            {industries.map(industry => (
              <li role="none" key={industry.node.uid}>
                <Link role="menuitem" to={`/industries/${industry.node.uid}`}>
                  {' '}
                  {industry.node.data.industry_name.text}{' '}
                </Link>{' '}
              </li>
            ))}{' '}
          </ul>{' '}
        </NavList>
        <NavList>
          <h3>Services</h3>
          <ul role="menu">
            {services.map(service => (
              <li role="none" key={service.node.uid}>
                <Link role="menuitem" to={`/services/${service.node.uid}`}>
                  {service.node.data.service_name.text}
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
        allPrismicIndustry(sort: { fields: [data___order], order: ASC }) {
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
        allPrismicService(sort: { fields: [data___order], order: ASC }) {
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
