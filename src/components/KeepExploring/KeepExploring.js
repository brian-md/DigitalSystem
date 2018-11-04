import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Section, Grid, IconTitle } from 'components';
const KeepExploring = ({ title, industries, bg, top, bottom, ...props }) => (
  <Section title={title} bg={bg} top={top} bottom={bottom}>
    <Grid flex size={15}>
      {industries.map(industry => (
        <IconTitle
          {...props}
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
);

KeepExploring.defaultProps = {
  title: 'Keep Exploring',
};
KeepExploring.propTypes = {
  children: PropTypes.string,
  industries: PropTypes.array,
  title: PropTypes.string,
  bg: PropTypes.oneOf(['purple', 'grey', 'white']),
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

const KeepExploringWithQuery = props => (
  <StaticQuery
    query={graphql`
      query KeepExploringQuery {
        allPrismicIndustry(sort: { fields: [data___order], order: ASC }) {
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
      }
    `}
    render={data => (
      <KeepExploring industries={data.allPrismicIndustry.edges} {...props} />
    )}
  />
);

export { KeepExploringWithQuery as KeepExploring };
