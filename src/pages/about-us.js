import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Title,
  Paragraph,
  Layout,
  Section,
  ContactSection,
  Card,
  ImageCard,
  KeepExploring,
  ContactInfo,
} from 'components';

const AboutUsPage = ({ data, location }) => {
  const {
    prismicAboutUs: {
      data: {
        hero_image,
        title,
        subtitle,
        contact_title,
        contact_description,
        description_title,
        description,
      },
    },
  } = data;
  return (
    <Layout location={location.pathname} pageTitle="About Us" stuckNav>
      <Section>
        <Title size="large" line as="h1">
          {title.text}
        </Title>
        <Paragraph size="medium">{subtitle.text}</Paragraph>
        <ImageCard
          stacked
          image={hero_image.localFile.childImageSharp.fluid}
          title={description_title.text}
          description={description.html}
          html
        />
      </Section>
      <KeepExploring bg="grey" top bottom />

      <ContactSection title="Get in Touch" id="about-us">
        <div>
          <Card
            title={contact_title.text}
            description={contact_description.text}
          />

          <ContactInfo size="small" />
        </div>
      </ContactSection>
    </Layout>
  );
};

AboutUsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default AboutUsPage;

export const query = graphql`
  query AboutUsQuery {
    prismicAboutUs {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2500, maxHeight: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        contact_title {
          text
        }
        contact_description {
          text
        }
        description_title {
          text
        }
        description {
          text
          html
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
  }
`;
