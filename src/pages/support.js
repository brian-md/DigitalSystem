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
  YouTube,
  Grid,
} from 'components';

const ContactPage = ({ data, location }) => {
  const {
    prismicSupportPage: {
      data: {
        hero_image,
        title,
        subtitle,
        contact_title,
        contact_description,
        links,
        videos,
      },
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
        <Grid staticGrid size={20}>
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
        </Grid>
      </Section>
      <Section bg="purple" top bottom title="Troubleshooting Videos">
        <Grid staticGrid>
          {videos.map(video => (
            <YouTube
              key={video.url.url}
              title={video.video_title.text}
              url={video.url.url}
            />
          ))}
        </Grid>
      </Section>

      <ContactSection title="Get in Touch" id="support">
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
        contact_title {
          text
        }
        contact_description {
          text
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
        videos {
          video_title {
            text
          }
          video_description {
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
