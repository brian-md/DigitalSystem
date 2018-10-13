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

const Index = ({ data, location }) => {
  const {
    site: {
      siteMetadata: { siteTitle },
    },
    prismicSolution: {
      data: {
        solution_name,
        tagline,
        main_image,
        long_description,
        long_description_title,
        features_title,
        features_summary,
        features,
      },
    },
  } = data;
  return (
    <Layout location={location.pathname} stuckNav>
      <Helmet title={`${solution_name.text} | ${siteTitle}`} />

      <Section>
        <Title size="large" line as="h1">
          {solution_name.text}
        </Title>
        <Paragraph size="medium">{tagline.text}</Paragraph>
        <ImageCard
          image={main_image.localFile.childImageSharp.fluid}
          title={long_description_title.text}
          description={long_description.text}
        />
      </Section>
      <Section bg="purple" title={features_title.text} top bottom>
        <DescriptionFeatureList
          features={features.map(feature => ({
            description: feature.feature.text,
            icon: feature.icon,
          }))}
        >
          {/* <Paragraph>{features_summary.text}</Paragraph> */}

          <ImageCard
            invert
            stacked
            size="medium"
            flip
            image={main_image.localFile.childImageSharp.fluid}
            title="{long_description_title.text}"
            description={features_summary.text}
          />
        </DescriptionFeatureList>
      </Section>
      <Section title="How We Do It">asdf</Section>
      <Section bg="grey" top bottom title="Related Solutions">
        asdf
      </Section>
    </Layout>
  );
};

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
