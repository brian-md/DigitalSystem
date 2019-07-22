import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  Title,
  Layout,
  Section,
  ContactSection,
  ImageCardGrid,
  Card,
  KeepExploring,
  ContactInfo,
} from 'components';

const BlogPage = ({ data, location }) => {
  // eslint-disable-next-line
  console.log(data.allPrismicBlogPost);
  const {
    prismicAboutUs: {
      data: { contact_title, contact_description },
    },
    allPrismicBlogPost: { edges: posts },
  } = data;
  return (
    <Layout location={location.pathname} pageTitle="About Us" stuckNav>
      <Section>
        <Title size="large" line as="h1">
          Blog
        </Title>
        <ImageCardGrid
          features={posts.map(post => ({
            title: post.node.data.title.text,
            image: post.node.data.main_image.localFile.childImageSharp.fluid,
            description: `${post.node.data.article.text.substring(0, 150)}…`,
            cta: {
              to: `/blog/${post.node.uid}`,
              text: 'Read More',
            },
          }))}
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

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default BlogPage;

export const query = graphql`
  query BlogQuery {
    allPrismicBlogPost(sort: { order: DESC, fields: data___date }) {
      edges {
        node {
          data {
            date(formatString: "dddd, MMMM Do YYYY")
            article {
              text
            }
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
            title {
              text
            }
          }
          uid
        }
      }
    }
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
