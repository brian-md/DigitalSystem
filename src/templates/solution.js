import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import {
  Section,
  ImageCard,
  Title,
  Paragraph,
  Layout,
  DescriptionFeatureList,
} from 'components';

const Index = ({ data, location }) => (
  <Layout location={location.pathname} stuckNav>
    <Helmet
      title={`${data.prismicSolution.data.solution_name.text} | ${
        data.site.siteMetadata.siteTitle
      }`}
    />

    <Section>
      <Title size="large" line as="h1">
        {data.prismicSolution.data.solution_name.text}
      </Title>
      <Paragraph size="medium">
        {data.prismicSolution.data.tagline.text}
      </Paragraph>
      <ImageCard
        image={
          data.prismicSolution.data.main_image.localFile.childImageSharp.fluid
        }
        title={data.prismicSolution.data.long_description_title.text}
        description={data.prismicSolution.data.long_description.text}
      />
    </Section>
    <Section
      bg="purple"
      title={data.prismicSolution.data.features_title.text}
      top
      bottom
    >
      <DescriptionFeatureList
        description={data.prismicSolution.data.features_summary.text}
        features={data.prismicSolution.data.features.map(feature => ({
          description: feature.feature.text,
          icon: feature.icon,
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
  query SolutionQuery($slug: String!) {
    prismicSolution(uid: { eq: $slug }) {
      uid
      data {
        solution_name {
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
        features_title {
          text
        }
        features_summary {
          text
        }
        features {
          feature {
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
