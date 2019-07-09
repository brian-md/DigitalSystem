import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Tabber from 'containers/tabber';
// import ImageWings from 'components/imageWings';
import {
  ContactSection,
  Grid,
  Hero,
  IconTitle,
  ImageCard,
  ImageWingTabs,
  Inner,
  Layout,
  Paragraph,
  Section,
  Title,
} from 'components';

const Index = ({ data, location }) => (
  <Layout
    location={location.pathname}
    pageTitle={data.prismicHomePage.data.seo_title.text}
    pageDescription={data.prismicHomePage.data.seo_description.text}
  >
    <Hero
      title={data.prismicHomePage.data.tagline.html}
      image={
        data.prismicHomePage.data.hero_image.localFile.childImageSharp.fluid
      }
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
      <Grid flex style={{ justifyContent: 'stretch' }}>
        {data.allPrismicService.edges.map((service, i) => (
          <ImageCard
            key={service.node.uid}
            flip={i % 2 !== 0}
            image={service.node.data.main_image.localFile.childImageSharp.fluid}
            title={service.node.data.service_name.text}
            description={service.node.data.short_description.text}
            cta={{ to: `/services/${service.node.uid}` }}
          />
        ))}
      </Grid>
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
            title: `${industry.node.data.industry_name.text} services`,
            image:
              industry.node.data.main_image.localFile.childImageSharp.fluid,
            description: industry.node.data.short_description.text,
            features: solutions.map(solution => ({
              title: solution.node.data.solution_name.text,
              description: solution.node.data.short_description.text,
              cta: {
                to: `/industries/${solution.node.data.industry.document[0].uid}/${solution.node.uid}`,
              },
            })),
            cta: { to: `/industries/${industry.node.uid}` },
          };
        })}
      />
      <div style={{ marginTop: '5rem' }}>
        <Title size="medium" as="h2" line center invert>
          {data.prismicHomePage.data.outro_title.text}
        </Title>
        <Paragraph html>
          {data.prismicHomePage.data.outro_description.html}
        </Paragraph>
      </div>
    </Section>
    <ContactSection
      id="home"
      title="Get Started"
      subtitle="Schedule a Free On-Site Consultation"
      description="Our technology specialist will personalize a solution based on your needs and feedback."
      contact
      invert={false}
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
        outro_title {
          text
        }
        outro_description {
          html
        }
        seo_title {
          text
        }
        seo_description {
          text
        }
        tagline {
          html
        }
        services_tagline {
          html
          text
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
