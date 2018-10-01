import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import Header from 'components/header';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuck: this.props.stuck,
      submenuOpen: false,
      menuOpen: false,
      currentSubmenu: null,
    };
    const { data } = this.props;
    this.menu = [
      { name: 'Home', to: '/' },
      {
        name: 'Services',
        submenu: data.map(service => ({
          name: service.node.data.service_name.text,
          to: `/services/${service.node.uid}`,
        })),
      },
    ];
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  toggleSubmenu = submenu => {
    // eslint-disable-next-line
    console.log(this.state.currentSubmenu);
    this.setState(prevState => {
      return prevState.submenuOpen
        ? { submenuOpen: false, currentSubmenu: null }
        : { submenuOpen: true, currentSubmenu: submenu };
    });
  };

  scrollListener = () => {
    this.setState({ stuck: window.scrollY > 400 || this.props.stuck });
  };

  render() {
    return (
      <Header
        title={this.props.title}
        menu={this.menu}
        toggleSubmenu={this.toggleSubmenu}
        {...this.state}
      />
    );
  }
}

NavBar.propTypes = {
  services: PropTypes.array,
  title: PropTypes.string,
  stuck: PropTypes.bool,
  data: PropTypes.array,
};

const NavBarWithData = props => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allPrismicService {
          edges {
            node {
              uid
              data {
                service_name {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => <NavBar {...props} data={data.allPrismicService.edges} />}
  />
);

export default NavBarWithData;
