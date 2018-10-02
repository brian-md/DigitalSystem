import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, Submenu, SubmenuWrapper } from './nav.css';

const Nav = ({
  menu,
  toggleSubmenu,
  submenuOpen,
  currentSubmenu,
  stuck,
  menuOpen,
}) => {
  const mappedMenu = menu.map(item => {
    return (
      <li key={item.name}>
        {item.to ? (
          <Link to={item.to}>{item.name}</Link>
        ) : (
          <button
            onClick={() => toggleSubmenu(item.name)}
            role="menu"
            className={item.name == currentSubmenu ? 'open-submenu' : undefined}
          >
            {item.name}
          </button>
        )}
        {item.submenu && (
          <SubmenuWrapper stuck={stuck} visible={item.name == currentSubmenu}>
            <dt>{item.name}</dt>
            <dd>
              <Submenu stuck={stuck} visible={item.name == currentSubmenu}>
                {item.submenu.map(menuItem => (
                  <li key={menuItem.name}>
                    <Link to={menuItem.to}>{menuItem.name}</Link>
                  </li>
                ))}
              </Submenu>
            </dd>
          </SubmenuWrapper>
        )}
      </li>
    );
  });
  return (
    <Container submenuOpen={submenuOpen} menuOpen={menuOpen}>
      <ul>{mappedMenu}</ul>
    </Container>
  );
};

Nav.propTypes = {
  menu: PropTypes.array,
  toggleSubmenu: PropTypes.func,
  submenuOpen: PropTypes.bool,
  currentSubmenu: PropTypes.string,
  stuck: PropTypes.bool,
  menuOpen: PropTypes.bool,
};

export default Nav;
