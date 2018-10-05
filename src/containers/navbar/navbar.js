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
    const { services, industries } = this.props;
    this.menu = [
      { name: 'Home', to: '/' },
      {
        name: 'Services',
        to: '/services',
        submenu: services
          .map(service => ({
            name: service.node.data.service_name.text,
            to: `/services/${service.node.uid}`,
          }))
          .concat([{ name: 'See All', to: '/services' }]),
      },
      {
        name: 'Industries',
        to: '/industries',
        submenu: industries
          .map(industry => ({
            name: industry.node.data.industry_name.text,
            to: `/industries/${industry.node.uid}`,
          }))
          .concat([{ name: 'See All', to: '/industries' }]),
      },
    ];
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
    document.body.style.overflow = 'scroll';
  }

  toggleSubmenu = submenu => {
    this.setState(prevState => {
      return this.state.currentSubmenu && this.state.currentSubmenu != submenu
        ? { currentSubmenu: submenu }
        : prevState.submenuOpen
          ? { submenuOpen: false, currentSubmenu: null }
          : { submenuOpen: true, currentSubmenu: submenu };
    });
  };

  toggleMenu = e => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(this.state.menuOpen);
    this.setState(prevState => {
      if (prevState.menuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
    document.body.style.overflow = 'hidden';
  };
  closeMenu = () => {
    this.setState({ menuOpen: false });
    document.body.style.overflow = 'scroll';
  };

  openSubmenu = submenu => {
    this.setState({ submenuOpen: true, currentSubmenu: submenu });
  };

  closeSubmenu = () => {
    this.setState({ submenuOpen: false, currentSubmenu: null });
  };

  changeSubmenu = submenu => {
    this.setState({ currentSubmenu: submenu });
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
        toggleMenu={this.toggleMenu}
        location={this.props.location}
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
  location: PropTypes.string,
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
      <NavBar
        {...props}
        services={data.allPrismicService.edges}
        industries={data.allPrismicIndustry.edges}
      />
    )}
  />
);

export default NavBarWithData;
