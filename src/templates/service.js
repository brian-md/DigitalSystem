import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
// import Hero from 'components/hero';
// import Paragraph from 'components/paragraph';
import Section from 'components/section';
// import ServiceCardList from 'containers/serviceCardList';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout stuckNav>
    <Section title={data.prismicService.data.service_name.text}>hiiii</Section>
    <Section title="Who We Serve" bg="purple" bottom top>
      hello
    </Section>
    <Section title="Get In Touch">hello</Section>

    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
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
  }
`;
