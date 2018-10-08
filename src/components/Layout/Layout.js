import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import { Navbar } from 'containers';
import { Footer } from 'components';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, children, stuckNav, location }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Navbar
      title={data.site.siteMetadata.siteTitle}
      stuck={stuckNav}
      location={location}
    />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  stuckNav: PropTypes.bool,
  location: PropTypes.string,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
  stuckNav: PropTypes.bool,
  location: PropTypes.string,
};

export { LayoutWithQuery as Layout };
