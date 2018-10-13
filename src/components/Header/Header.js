import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './Header.css';
import Nav from './nav';
import MenuButton from './menuButton';
import { Logo } from 'components';

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
      <Logo
        color="#ffffff"
        height={stuck || submenuOpen ? 2 : 5}
        style={{
          transition: 'all 0.5s ease',
        }}
      />
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
