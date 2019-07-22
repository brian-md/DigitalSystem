import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Hero, Layout, Section, ContactSection, Paragraph } from 'components';

const Post = ({ data, location }) => {
  const {
    prismicBlogPost: {
      uid,
      data: { title, date, main_image, article },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  return (
    <Layout
      location={location.pathname}
      pageTitle={title.text}
      pageDescription={article.text.substring(0, 300)}
      imageUrl={`${siteUrl}${main_image.localFile.childImageSharp.fixed.src}`}
    >
      <Hero
        small
        pullUp="-10rem"
        title={title.text}
        image={main_image.localFile.childImageSharp.fluid}
        subtitle={`Published ${date}`}
      />

      <Section>
        <Paragraph center={false} html as="div">
          {article.html}
        </Paragraph>
      </Section>
      <ContactSection id={`blog-${uid}`} />
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    prismicBlogPost(uid: { eq: $slug }) {
      uid
      data {
        date(formatString: "dddd, MMMM Do")
        article {
          html
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
        title {
          text
        }
        gallery {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3800, maxHeight: 3800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          caption
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
