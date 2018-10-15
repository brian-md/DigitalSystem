import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.industrySection = React.createRef();
    this.state = {
      industry: this.props.industries[0].node.data.industry_name.text,
    };
  }
  selectIndustry = industryID => {
    if (
      this.props.industries.some(
        industry => industry.node.data.industry_name.text === industryID
      )
    ) {
      // eslint-disable-next-line
      const industrySection = ReactDOM.findDOMNode(
        this.industrySection.current
      );
      // eslint-disable-next-line
      console.log(industrySection)
      window.scrollTo({
        top: industrySection.offsetTop + 215,
        behavior: 'smooth',
      });
      setTimeout(() => {
        this.setState({ industry: industryID });
      }, 1000);
    }
  };
  render() {
    return this.props.children({
      selectIndustry: this.selectIndustry,
      currentIndustry: this.state.industry,
      industrySection: this.industrySection,
    });
  }
}

HomePage.propTypes = {
  industries: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

const HomePageWithData = props => (
  <StaticQuery
    query={graphql`
      query HomePageContainerQuery {
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
      }
    `}
    render={data => (
      <HomePage {...props} industries={data.allPrismicIndustry.edges} />
    )}
  />
);

export { HomePageWithData as HomePage };
