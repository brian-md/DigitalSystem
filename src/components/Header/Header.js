import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './Header.css';
import Nav from './nav';
import MenuButton from './menuButton';
import { Title } from 'components';

const Header = ({
  stuck,
  menu,
  menuOpen,
  submenuOpen,
  toggleSubmenu,
  toggleMenu,
  currentSubmenu,
  location,
}) => (
  <Container stuck={stuck} menuOpen={menuOpen} submenuOpen={submenuOpen}>
    <Link to="/">
      <Title as="h1">logo</Title>
    </Link>
    <Nav
      menu={menu}
      menuOpen={menuOpen}
      submenuOpen={submenuOpen}
      toggleSubmenu={toggleSubmenu}
      currentSubmenu={currentSubmenu}
      stuck={stuck}
      location={location}
    />

    <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  stuck: PropTypes.bool,
  menu: PropTypes.array,
  submenuOpen: PropTypes.bool,
  menuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  toggleSubmenu: PropTypes.func,
  location: PropTypes.string,
  currentSubmenu: PropTypes.string,
};

export { Header };
