import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Hero,
  Layout,
  Section,
  ContactSection,
  Card,
  ContactInfo,
  FlexColumns,
} from 'components';

const ContactPage = ({ data, location }) => {
  const {
    prismicSupportPage: {
      data: { hero_image, title, subtitle, links },
    },
  } = data;
  return (
    <Layout
      location={location.pathname}
      pageTitle="Customer Service and Technical Support"
    >
      <Hero
        small
        title={title.text}
        subtitle={subtitle.text}
        image={hero_image.localFile.childImageSharp.fluid}
      >
        <ContactInfo invert />
      </Hero>
      <Section title="External Resources">
        <FlexColumns>
          <div style={{ flex: 1.618 }}>asdf</div>
          <div>
            {links.map(link => (
              <Card
                small
                noButton
                key={link.url.url}
                icon="external_link"
                title={link.link_title.text}
                description={link.link_description.text}
                cta={{ href: link.url.url, text: 'Go To Link' }}
              />
            ))}
          </div>
        </FlexColumns>
      </Section>

      <ContactSection title="Get in Touch">
        <div>
          {/* <Card title={description_title.text} description={description.text} /> */}

          <ContactInfo size="small" />
        </div>
      </ContactSection>
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default ContactPage;

export const query = graphql`
  query SupportQuery {
    prismicSupportPage {
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
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        links {
          link_title {
            text
          }
          link_description {
            text
          }
          url {
            url
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
