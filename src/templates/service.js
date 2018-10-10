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
  ImageCardGridTabs,
} from 'components';

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
    <Section title="Main Benefits" bg="purple" bottom top>
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
    <Section title={`${data.prismicService.data.service_name.text} Solutions`}>
      <ImageCardGridTabs
        data={data.allPrismicIndustry.edges.map(industry => {
          const solutions = data.allPrismicSolution.edges.filter(
            solution =>
              solution.node.data.industry.document[0].uid ===
                industry.node.uid &&
              solution.node.data.services
                .map(service => service.service.document[0].uid)
                .includes(data.prismicService.uid)
          );
          return {
            name: industry.node.data.industry_name.text,
            features: solutions.map(solution => ({
              title: solution.node.data.solution_name.text,
              image:
                solution.node.data.main_image.localFile.childImageSharp.fluid,
              description: solution.node.data.short_description.text,
              cta: { to: `/${industry.node.uid}/${solution.node.uid}` },
            })),
          };
        })}
      />
    </Section>
    <Section title="Our Partners" bg="grey" bottom top />
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
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
