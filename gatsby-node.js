const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const services = await graphql(`
    {
      allPrismicService {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  const serviceTemplate = path.resolve('./src/templates/service.js');

  services.data.allPrismicService.edges.forEach(edge => {
    createPage({
      path: `/services/${edge.node.uid}`,
      component: serviceTemplate,
      context: {
        slug: edge.node.uid,
      },
    });
  });

  const industries = await graphql(`
    {
      allPrismicIndustry {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  const industryTemplate = path.resolve('./src/templates/industry.js');

  industries.data.allPrismicIndustry.edges.forEach(edge => {
    createPage({
      path: `/industries/${edge.node.uid}`,
      component: industryTemplate,
      context: {
        slug: edge.node.uid,
      },
    });
  });

  const solutions = await graphql(`
    {
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
            }
          }
        }
      }
    }
  `);

  const solutionTemplate = path.resolve('./src/templates/solution.js');

  solutions.data.allPrismicSolution.edges.forEach(edge => {
    createPage({
      path: `/industries/${edge.node.data.industry.document[0].uid}/${
        edge.node.uid
      }`,
      component: solutionTemplate,
      context: {
        slug: edge.node.uid,
      },
    });
  });
};
