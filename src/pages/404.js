import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Tabber from 'containers/tabber';
// import ImageWings from 'components/imageWings';
import { Hero, Layout, KeepExploring } from 'components';

const NotFound = ({ data, location }) => (
  <Layout location={location.pathname}>
    <Hero
      title="Oops!  We can't find that page right now."
      subtitle="Keep exploring, and let us know if you can't find what you're looking for."
      image={data.notFoundImage.childImageSharp.fluid}
      primaryAction={{
        to: '/',
        desc: 'Go Home',
      }}
      secondaryAction={{
        to: '/contact',
        desc: 'Contact Us',
      }}
    />{' '}
    <KeepExploring />
  </Layout>
);

NotFound.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default NotFound;

export const query = graphql`
  query NotFoundQuery {
    notFoundImage: file(relativePath: { eq: "notfound.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    prismicHomePage {
      data {
        tagline {
          html
        }
        services_tagline {
          html
        }
        services_title {
          text
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        service_spotlight_1 {
          document {
            uid
          }
        }
        service_spotlight_2 {
          document {
            uid
          }
        }
        service_spotlight_3 {
          document {
            uid
          }
        }
      }
    }
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
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
            short_description {
              text
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicIndustry {
      edges {
        node {
          uid
          data {
            industry_name {
              text
            }
            short_description {
              text
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicSolution {
      edges {
        node {
          uid
          data {
            industry {
              document {
                uid
              }
            }
            solution_name {
              text
            }
            short_description {
              text
            }
          }
        }
      }
    }
  }
`;
