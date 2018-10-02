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

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

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
};
