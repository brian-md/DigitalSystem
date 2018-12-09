import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Hero,
  ImageCard,
  ImageWings,
  Layout,
  Section,
  ContactSection,
  ImageCardGridTabs,
} from 'components';

const Index = ({ data, location }) => {
  const {
    prismicService: {
      uid,
      data: {
        service_name,
        tagline,
        long_description_title,
        long_description,
        features,
        main_image,
        secondary_image,
        contact_title,
        contact_description_title,
        contact_description,
      },
    },
  } = data;
  return (
    <Layout location={location.pathname} pageTitle={service_name.text}>
      <Hero
        small
        pullUp="-10rem"
        title={service_name.text}
        image={main_image.localFile.childImageSharp.fluid}
        subtitle={tagline.text}
      />
      <Section>
        <ImageCard
          responsiveImage
          flip
          title={long_description_title.text}
          description={long_description.text}
          image={main_image.localFile.childImageSharp.fluid}
        />
      </Section>
      <Section title="Main Benefits" bg="purple" bottom>
        <ImageWings
          invert
          image={secondary_image.localFile.childImageSharp.fluid}
          features={features.map(feature => ({
            title: feature.title.text,
            description: feature.description.html,
            html: true,
            icon: feature.icon,
          }))}
        />
      </Section>
      <Section title={`${service_name.text} Solutions`}>
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
                cta: {
                  to: `/industries/${industry.node.uid}/${solution.node.uid}`,
                },
              })),
            };
          })}
        />
      </Section>
      {/* <Section title="Our Partners" bg="grey" bottom top>
        brands
      </Section> */}
      <ContactSection
        id={`service-${uid}`}
        title={contact_title.text}
        subtitle={contact_description_title.text}
        description={contact_description.text}
      />{' '}
    </Layout>
  );
};

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
            html
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
          ...SmallSolution
        }
      }
    }
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
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
