import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import {
  Hero,
  Layout,
  Section,
  ContactSection,
  IconTitle,
  Card,
  ImageCardGrid,
} from 'components';
import { Map } from 'containers';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 70rem;
  margin: auto;
  span {
    text-align: left;
  }
  ${MEDIA.TABLET`
    flex-direction: column;
    align-items: center;
  `};
`;

const MapWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(10rem, max-content);
  grid-template-rows: 1fr;
  grid-template-areas: 'map desc';
  grid-gap: 2rem;
  ${MEDIA.TABLET`
    flex-direction: column;
    grid-template-rows: max-content max-content;
    grid-template-columns: 1fr;
    grid-template-areas: 
            'map'
            'desc';
  `};
`;

const ContactPage = ({ data, location }) => {
  const {
    prismicContactPage: {
      data: {
        hero_image,
        title,
        subtitle,
        tagline,
        description,
        description_title,
      },
    },
    allPrismicService: { edges: services },
  } = data;
  return (
    <Layout location={location.pathname}>
      <Hero
        small
        title={title.text}
        subtitle={tagline.text}
        image={hero_image.localFile.childImageSharp.fluid}
      >
        <ContactWrapper>
          <IconTitle invert icon="phone" href="tel:888-90-Digital">
            888-90-Digital
          </IconTitle>
          <IconTitle
            invert
            icon="email"
            href="mailto:info@digitalsystemsav.com"
          >
            info@digitalsystemsav.com
          </IconTitle>
        </ContactWrapper>
      </Hero>
      <ContactSection title={subtitle.text}>
        <div>
          <Card title={description_title.text} description={description.text} />

          <ContactWrapper>
            <IconTitle icon="phone" size="small" href="tel:888-90-Digital">
              888-90-Digital
            </IconTitle>
            <IconTitle
              icon="email"
              size="small"
              href="mailto:info@digitalsystemsav.com"
            >
              info@digitalsystemsav.com
            </IconTitle>
          </ContactWrapper>
        </div>
      </ContactSection>
      <Section bg="grey" top bottom title="We're Local">
        <MapWrapper>
          <Map style={{ margin: 'auto' }} />
          <Card
            style={{ gridArea: 'desc' }}
            title="We'll Come to You"
            description="Our office is based in Chicago, and our sales team can visit your home or facility to design your custom system."
          />
        </MapWrapper>
      </Section>
      <Section title="keep exploring">
        <ImageCardGrid
          features={services.map(service => ({
            title: service.node.data.service_name.text,
            description: service.node.data.short_description.text,
            image: service.node.data.main_image.localFile.childImageSharp.fluid,
            cta: {
              to: `/services/${service.node.uid}`,
            },
          }))}
        />
      </Section>
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default ContactPage;

export const query = graphql`
  query ContactQuery {
    prismicContactPage {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        description_title {
          text
        }

        tagline {
          text
        }
        description {
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
