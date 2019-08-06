import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Hero,
  ImageCard,
  ImageWings,
  Layout,
  Section,
  ImageCardGrid,
  ContactSection,
} from 'components';

const Index = ({ data, location }) => {
  const {
    prismicIndustry: {
      uid,
      data: {
        seo_title,
        seo_description,
        industry_name,
        tagline,
        long_description_title,
        long_description,
        main_image,
        contact_title,
        contact_description_title,
        contact_description,
      },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  return (
    <Layout
      location={location.pathname}
      pageTitle={seo_title.text || `${industry_name.text} Solutions`}
      pageDescription={seo_description.text || long_description.text}
      imageUrl={`${siteUrl}${main_image.localFile.childImageSharp.fixed.src}`}
    >
      <Hero
        small
        pullUp="-10rem"
        title={`${data.prismicIndustry.data.industry_name.text} Solutions`}
        image={main_image.localFile.childImageSharp.fluid}
        subtitle={tagline.text}
      />
      <Section>
        <ImageCard
          responsiveImage
          flip
          html
          title={long_description_title.text}
          description={long_description.html}
          image={main_image.localFile.childImageSharp.fluid}
        />
      </Section>
      <Section bg="purple" bottom top title={`${industry_name.text} Solutions`}>
        <ImageCardGrid
          invert
          features={data.allPrismicSolution.edges
            .filter(
              solution => solution.node.data.industry.document[0].uid === uid
            )
            .map(solution => ({
              title: solution.node.data.solution_name.text,
              description: solution.node.data.short_description.text,
              image:
                solution.node.data.main_image.localFile.childImageSharp.fluid,
              cta: {
                to: `/industries/${solution.node.data.industry.document[0].uid}/${solution.node.uid}`,
              },
            }))}
        />
      </Section>
      <Section title="What Sets Us Apart">
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
      <ContactSection
        id={`industry-${uid}`}
        title={contact_title.text}
        subtitle={contact_description_title.text}
        description={contact_description.text}
      />
    </Layout>
  );
};

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
        seo_title {
          text
        }
        seo_description {
          text
        }
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
          html
        }
        contact_title {
          text
        }
        contact_description_title {
          text
        }
        contact_description {
          text
        }
        main_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 3800, maxHeight: 3800) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 1024, height: 512) {
                ...GatsbyImageSharpFixed
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
          ...SmallSolution
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
        siteUrl
      }
    }
  }
`;
