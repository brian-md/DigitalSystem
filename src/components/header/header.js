import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const Header = ({
  stuck,
  menu,
  menuOpen,
  submenuOpen,
  toggleSubmenu,
  currentSubmenu,
}) => (
  <Container stuck={stuck} submenuOpen={submenuOpen}>
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
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  stuck: PropTypes.bool,
  menu: PropTypes.array,
  submenuOpen: PropTypes.bool,
  menuOpen: PropTypes.bool,
  toggleSubmenu: PropTypes.func,
  currentSubmenu: PropTypes.string,
};

export default Header;
