import { graphql } from 'gatsby';

export const smallPrismicSolutionFragment = graphql`
  fragment SmallSolution on PrismicSolution {
    uid
    data {
      solution_name {
        text
      }
      short_description {
        text
      }
      main_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      industry {
        document {
          uid
        }
      }
      services {
        service {
          document {
            uid
          }
        }
      }
    }
  }
`;
