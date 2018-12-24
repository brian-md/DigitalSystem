import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Section,
  ImageCard,
  Paragraph,
  Layout,
  DescriptionFeatureList,
  ImageCardGrid,
  ContactSection,
  Hero,
} from 'components';

const Index = ({ data, location }) => {
  const {
    prismicSolution: {
      uid,
      data: {
        solution_name,
        tagline,
        main_image,
        secondary_image,
        long_description,
        long_description_title,
        features_title,
        features_subtitle,
        features_summary,
        features,
        explanation,
        industry,
        services,
        contact_title,
        contact_description,
        contact_description_title,
      },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  return (
    <Layout
      imageUrl={`${siteUrl}${main_image.localFile.childImageSharp.fixed.src}`}
      pageDescription={long_description.text}
      location={location.pathname}
      services={[
        {
          name: solution_name,
          description: long_description.text,
          image: {
            url: main_image.localFile.childImageSharp.fixed.src,
            width: main_image.localFile.childImageSharp.fixed.width,
            height: main_image.localFile.childImageSharp.fixed.height,
          },
        },
      ]}
      pageTitle={solution_name.text}
      parents={[
        {
          slug: `/industries/${industry.document[0].uid}`,
          name: `${industry.document[0].data.industry_name.text} Solutions`,
        },
      ]}
    >
      <Hero
        small
        pullUp="-10rem"
        title={solution_name.text}
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
      <Section bg="purple" title={features_title.text} top bottom>
        <DescriptionFeatureList
          invert
          features={features.map(feature => ({
            description: feature.feature.html,
            icon: feature.icon,
            html: true,
          }))}
        >
          {/* <Paragraph>{features_summary.text}</Paragraph> */}

          <ImageCard
            invert
            stacked
            size="medium"
            flip
            image={secondary_image.localFile.childImageSharp.fluid}
            title={features_subtitle.text}
            description={features_summary.text}
          />
        </DescriptionFeatureList>
      </Section>
      <ContactSection
        id={`solution-${uid}`}
        title={contact_title.text}
        subtitle={contact_description_title.text}
        description={contact_description.text}
      />
      <Section
        title={`More ${industry.document[0].data.industry_name.text} Solutions`}
        bg="grey"
        top
        bottom
      >
        <ImageCardGrid
          features={data.allPrismicSolution.edges
            .filter(
              solution =>
                solution.node.data.industry.document[0].uid ===
                industry.document[0].uid
            )
            .map(solution => ({
              title: solution.node.data.solution_name.text,
              description: solution.node.data.short_description.text,
              image:
                solution.node.data.main_image.localFile.childImageSharp.fluid,
              cta: {
                to: `/industries/${
                  solution.node.data.industry.document[0].uid
                }/${solution.node.uid}`,
              },
            }))}
        />
      </Section>

      <Section top title="How We Do It">
        <Paragraph>{explanation.text}</Paragraph>
        <ImageCardGrid
          small
          stacked
          features={services.map(serviceId => {
            const service = data.allPrismicService.edges.find(
              service => service.node.uid === serviceId.service.document[0].uid
            );
            return {
              title: service.node.data.service_name.text,
              link: `/services/${service.node.uid}`,
              image:
                service.node.data.main_image.localFile.childImageSharp.fluid,
              description: service.node.data.short_description.text,
              cta: {
                to: `/services/${service.node.uid}`,
                text: 'Read More',
              },
            };
          })}
        />
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
        contact_title {
          text
        }
        contact_description {
          text
        }
        contact_description_title {
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
        industry {
          document {
            uid
            data {
              industry_name {
                text
              }
            }
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
        features_subtitle {
          text
        }
        features_summary {
          text
        }
        features {
          feature {
            text
            html
          }
          icon
        }
        explanation {
          text
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
        siteUrl
      }
    }
  }
`;
