import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Submenu } from './nav.css';

const Nav = ({ menu, toggleSubmenu, submenuOpen, currentSubmenu }) => {
  const mappedMenu = menu.map(item => {
    return (
      <li key={item.name}>
        {item.to ? (
          <Link to={item.to}>{item.name}</Link>
        ) : (
          <button onClick={() => toggleSubmenu(item.name)} role="menu">
            {item.name}
          </button>
        )}
        {item.submenu && (
          <Submenu visible={item.name == currentSubmenu}>
            {item.submenu.map(menuItem => (
              <li key={menuItem.name}>
                <Link to={menuItem.to}>{menuItem.name}</Link>
              </li>
            ))}
          </Submenu>
        )}
      </li>
    );
  });
  return (
    <Container submenuOpen={submenuOpen}>
      <ul>{mappedMenu}</ul>
    </Container>
  );
};

Nav.propTypes = {
  menu: PropTypes.array,
  toggleSubmenu: PropTypes.func,
  submenuOpen: PropTypes.bool,
  currentSubmenu: PropTypes.string,
};

export default Nav;
