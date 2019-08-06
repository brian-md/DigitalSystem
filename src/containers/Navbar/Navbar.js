import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import { Header } from 'components/';

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
        name: 'Who We Serve',
        to: '/industries',
        submenu: industries.map(industry => ({
          name: industry.node.data.industry_name.text,
          to: `/industries/${industry.node.uid}`,
        })),
      },
      {
        name: 'Services',
        to: '/services',
        submenu: services.map(service => ({
          name: service.node.data.service_name.text,
          to: `/services/${service.node.uid}`,
        })),
      },
      { name: 'Support', to: '/support' },
      { name: 'About Us', to: '/about-us' },
      { name: 'Blog', to: '/blog' },
      { name: 'Contact', to: '/contact' },
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
      document.body.style.overflow = prevState.menuOpen ? 'scroll' : 'hidden';
      return { menuOpen: !prevState.menuOpen };
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
  industries: PropTypes.array,
};

const NavBarWithData = props => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allPrismicService(sort: { fields: [data___order], order: ASC }) {
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
      <NavBar
        {...props}
        services={data.allPrismicService.edges}
        industries={data.allPrismicIndustry.edges}
      />
    )}
  />
);

export { NavBarWithData as Navbar };
