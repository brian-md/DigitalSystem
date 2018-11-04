import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Tabber from 'containers/tabber';
// import ImageWings from 'components/imageWings';
import { ServiceCardList } from 'containers';
import {
  Hero,
  Paragraph,
  ImageWingTabs,
  Layout,
  Section,
  IconTitle,
  Grid,
  Inner,
  ContactSection,
} from 'components';

const Index = ({ data, location }) => (
  <Layout location={location.pathname}>
    <Hero
      title={data.prismicHomePage.data.tagline.html}
      image={
        data.prismicHomePage.data.hero_image.localFile.childImageSharp.fluid
      }
      // primaryAction={{
      //   to: '/contact',
      //   desc: 'Get Started',
      // }}
      // secondaryAction={{
      //   to: '/contact',
      //   desc: 'Watch Video',
      // }}
    >
      <Inner>
        <Grid flex size={15}>
          {data.allPrismicIndustry.edges.map(industry => (
            <IconTitle
              iconSize="large"
              key={industry.node.uid}
              icon={industry.node.uid}
              stacked={1}
              invert
              to={`/industries/${industry.node.uid}`}
            >
              {industry.node.data.industry_name.text}
            </IconTitle>
          ))}
        </Grid>
      </Inner>
    </Hero>
    <Section title={data.prismicHomePage.data.services_title.text}>
      <Paragraph html>
        {data.prismicHomePage.data.services_tagline.html}
      </Paragraph>
      <ServiceCardList
        services={data.allPrismicService.edges}
        spotlight={[
          data.prismicHomePage.data.service_spotlight_1.document[0].uid,
          data.prismicHomePage.data.service_spotlight_2.document[0].uid,
          data.prismicHomePage.data.service_spotlight_3.document[0].uid,
        ]}
      />
    </Section>
    <Section title="Who We Serve" bg="purple" bottom top>
      <ImageWingTabs
        invert={1}
        data={data.allPrismicIndustry.edges.map(industry => {
          const solutions = data.allPrismicSolution.edges.filter(
            solution =>
              solution.node.data.industry.document[0].uid === industry.node.uid
          );
          return {
            name: industry.node.data.industry_name.text,
            image:
              industry.node.data.main_image.localFile.childImageSharp.fluid,
            description: industry.node.data.short_description.text,
            features: solutions.map(solution => ({
              title: solution.node.data.solution_name.text,
              description: solution.node.data.short_description.text,
              cta: {
                to: `/industries/${
                  solution.node.data.industry.document[0].uid
                }/${solution.node.uid}`,
              },
            })),
            cta: { to: `/industries/${industry.node.uid}` },
          };
        })}
      />
    </Section>
    <ContactSection
      id="home"
      title="Let Us Help"
      subtitle="come on!"
      description="Immerse yourself in art and experience movies like they were meant to be.Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque interdum luctus purus sit amet rhoncus. Vestibulum vitae consectetur eros, consequat aliquet erat."
    />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    prismicHomePage {
      data {
        tagline {
          html
        }
        services_tagline {
          html
        }
        services_title {
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
        service_spotlight_1 {
          document {
            uid
          }
        }
        service_spotlight_2 {
          document {
            uid
          }
        }
        service_spotlight_3 {
          document {
            uid
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
    allPrismicService(sort: { fields: [data___order], order: ASC }) {
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
            order
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500, maxHeight: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
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
            industry {
              document {
                uid
              }
            }
            solution_name {
              text
            }
            short_description {
              text
            }
          }
        }
      }
    }
  }
`;
