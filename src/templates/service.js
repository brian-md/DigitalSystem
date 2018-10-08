import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Hero, ImageCard, ImageWings, Layout, Section } from 'components';

const Index = ({ data, location }) => (
  <Layout location={location.pathname}>
    <Helmet
      title={`${data.prismicService.data.service_name.text} | ${
        data.site.siteMetadata.siteTitle
      }`}
    />
    <Hero
      small
      pullUp="-10rem"
      title={data.prismicService.data.service_name.text}
      image={
        data.prismicService.data.main_image.localFile.childImageSharp.fluid
      }
      subtitle={data.prismicService.data.tagline.text}
    />
    <Section>
      <ImageCard
        flip
        title={data.prismicService.data.long_description_title.text}
        description={data.prismicService.data.long_description.text}
        image={
          data.prismicService.data.main_image.localFile.childImageSharp.fluid
        }
      />
    </Section>
    <Section title="Who We Serve" bg="purple" bottom top>
      <ImageWings
        image={
          data.prismicService.data.secondary_image.localFile.childImageSharp
            .fluid
        }
        description={data.prismicService.data.features_intro.text}
        features={data.prismicService.data.features.map(feature => ({
          title: feature.title.text,
          description: feature.description.text,
        }))}
      />
    </Section>
    <Section title="Get In Touch">hello</Section>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default Index;

export const query = graphql`
  query ServiceQuery($slug: String!) {
    prismicService(uid: { eq: $slug }) {
      uid
      data {
        service_name {
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
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
