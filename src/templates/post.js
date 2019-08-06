import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Gallery,
  Layout,
  Section,
  ContactSection,
  Paragraph,
  Title,
} from 'components';

const Post = ({ data, location }) => {
  const {
    prismicBlogPost: {
      uid,
      data: { title, date, main_image, caption, gallery, article },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  return (
    <Layout
      stuckNav
      location={location.pathname}
      pageTitle={title.text}
      pageDescription={article.text.substring(0, 300)}
      imageUrl={`${siteUrl}${main_image.localFile.childImageSharp.fixed.src}`}
    >
      <Section>
        <Title size="large" line as="h1">
          {title.text}
        </Title>
        <Paragraph center size="medium">
          Published {date}
        </Paragraph>
        <Gallery
          items={[{ image: main_image.localFile, title: caption.text }].concat(
            gallery.map(({ image, caption }) => ({
              image: image.localFile,
              title: caption,
            }))
          )}
        />

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
        caption {
          text
        }
        main_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500, maxHeight: 927) {
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
                fluid(maxWidth: 1500, maxHeight: 927) {
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
