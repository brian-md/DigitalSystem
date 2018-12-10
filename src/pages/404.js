import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Tabber from 'containers/tabber';
// import ImageWings from 'components/imageWings';
import { Hero, Layout, KeepExploring } from 'components';

const NotFound = ({ data, location }) => (
  <Layout location={location.pathname}>
    <Hero
      logo
      title="Thank You for reaching out."
      subtitle="One of our technology specialists will contact you within 48 hours!"
      image={
        data.prismicHomePage.data.hero_image.localFile.childImageSharp.fluid
      }
      primaryAction={{
        to: '/',
        desc: 'Go Home',
      }}
      //   secondaryAction={{
      //     onClick: this.context.router.history.goBack,
      //     desc: 'Go Back',
      //   }}
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
