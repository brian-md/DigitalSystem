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
  Card,
  Grid,
  IconTitle,
  ContactInfo,
} from 'components';
import { Map } from 'containers';

const MapWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(10rem, max-content);
  grid-template-rows: 1fr;
  grid-template-areas: 'map desc';
  grid-gap: 4rem;
  ${MEDIA.TABLET`
  grid-gap: 2rem;
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
        map_title,
        map_subtitle,
        map_description,
      },
    },
    allPrismicIndustry: { edges: industries },
  } = data;
  return (
    <Layout
      location={location.pathname}
      pageTitle="Contact Customer Service and Sales"
    >
      <Hero
        small
        title={title.text}
        subtitle={tagline.text}
        image={hero_image.localFile.childImageSharp.fluid}
      >
        <ContactInfo invert />
      </Hero>
      <ContactSection title={subtitle.text}>
        <div>
          <Card title={description_title.text} description={description.text} />

          <ContactInfo size="small" />
        </div>
      </ContactSection>
      <Section bg="grey" top bottom title={map_title.text}>
        <MapWrapper>
          <Map style={{ margin: 'auto' }} />
          <Card
            style={{ gridArea: 'desc' }}
            title={map_subtitle.text}
            description={map_description.text}
          />
        </MapWrapper>
      </Section>
      <Section title="keep exploring">
        <Grid flex size={15}>
          {industries.map(industry => (
            <IconTitle
              iconSize="large"
              key={industry.node.uid}
              icon={industry.node.uid}
              stacked={1}
              to={`/industries/${industry.node.uid}`}
            >
              {industry.node.data.industry_name.text}
            </IconTitle>
          ))}
        </Grid>
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
        map_title {
          text
        }
        map_subtitle {
          text
        }
        map_description {
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
