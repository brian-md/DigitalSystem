import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import {
  Hero,
  ImageCard,
  ImageWings,
  Layout,
  Section,
  ImageCardGrid,
} from 'components';

const Index = ({ data, location }) => (
  <Layout location={location.pathname}>
    <Helmet
      title={`${data.prismicIndustry.data.industry_name.text} | ${
        data.site.siteMetadata.siteTitle
      }`}
    />
    <Hero
      small
      pullUp="-10rem"
      title={data.prismicIndustry.data.industry_name.text}
      image={
        data.prismicIndustry.data.main_image.localFile.childImageSharp.fluid
      }
      subtitle={data.prismicIndustry.data.tagline.text}
    />
    <Section>
      <ImageCard
        flip
        title={data.prismicIndustry.data.long_description_title.text}
        description={data.prismicIndustry.data.long_description.text}
        image={
          data.prismicIndustry.data.main_image.localFile.childImageSharp.fluid
        }
      />
    </Section>
    <Section title="Who We Serve" bg="purple" bottom top>
      <ImageWings
        image={
          data.prismicIndustry.data.secondary_image.localFile.childImageSharp
            .fluid
        }
        description={data.prismicIndustry.data.features_intro.text}
        features={data.prismicIndustry.data.features.map(feature => ({
          title: feature.title.text,
          description: feature.description.text,
        }))}
      />
    </Section>
    <Section
      title={`${data.prismicIndustry.data.industry_name.text} Solutions`}
    >
      <ImageCardGrid
        features={data.allPrismicSolution.edges
          .filter(
            solution =>
              solution.node.data.industry.document[0].uid ===
              data.prismicIndustry.uid
          )
          .map(solution => ({
            title: solution.node.data.solution_name.text,
            description: solution.node.data.short_description.text,
            image:
              solution.node.data.main_image.localFile.childImageSharp.fluid,
            cta: {
              to: `/industries/${solution.node.data.industry.document[0].uid}/${
                solution.node.uid
              }`,
            },
          }))}
      />
    </Section>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default Index;

export const query = graphql`
  query IndustryQuery($slug: String!) {
    prismicIndustry(uid: { eq: $slug }) {
      uid
      data {
        industry_name {
          text
        }
        tagline {
          text
        }
        short_description {
          text
        }
        long_description_title {
          text
        }
        long_description {
          text
        }
        main_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 3800, maxHeight: 3800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        secondary_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        features_intro {
          text
        }
        features {
          title {
            text
          }
          description {
            text
          }
          icon
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
            solution_name {
              text
            }
            short_description {
              text
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            industry {
              document {
                uid
              }
            }
            services {
              service {
                document {
                  uid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
