import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import MenuButton from 'components/header/menuButton';

const Header = ({
  stuck,
  menu,
  menuOpen,
  submenuOpen,
  toggleSubmenu,
  toggleMenu,
  currentSubmenu,
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
  currentSubmenu: PropTypes.string,
};

export default Header;
