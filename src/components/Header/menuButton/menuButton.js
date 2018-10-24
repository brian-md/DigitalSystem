import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './menuButton.css';
import MenuIcon from './menuIcon.js';

const MenuButton = ({ toggleMenu, menuOpen }) => {
  return (
    <Container onClick={toggleMenu}>
      <span className="menu-label">{menuOpen ? 'close' : 'menu'}</span>
      <MenuIcon />
    </Container>
  );
};

MenuButton.propTypes = {
  toggleMenu: PropTypes.func,
  menuOpen: PropTypes.bool,
};

export default MenuButton;
