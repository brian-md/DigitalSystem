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
  location,
}) => {
  const mappedMenu = menu.map(item => {
    return (
      <li key={item.name}>
        {item.to && !item.submenu ? (
          <Link
            to={item.to}
            className={location && location === item.to ? 'current' : undefined}
          >
            {item.name}
          </Link>
        ) : (
          <button
            onClick={() => toggleSubmenu(item.name)}
            role="menu"
            className={
              item.name == currentSubmenu
                ? 'open-submenu'
                : location && location.includes(item.to)
                  ? 'current'
                  : undefined
            }
          >
            {item.name}
          </button>
        )}
        {item.submenu && (
          <SubmenuWrapper stuck={stuck} visible={item.name == currentSubmenu}>
            <dt>
              {item.name}
              <Link to={item.to}>See All</Link>
            </dt>
            <dd>
              <Submenu stuck={stuck} visible={item.name == currentSubmenu}>
                {item.submenu.map(menuItem => (
                  <li key={menuItem.name}>
                    <Link
                      className={
                        location && location === menuItem.to
                          ? 'current'
                          : undefined
                      }
                      to={menuItem.to}
                    >
                      {menuItem.name}
                    </Link>
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
  location: PropTypes.string,
  toggleSubmenu: PropTypes.func,
  submenuOpen: PropTypes.bool,
  currentSubmenu: PropTypes.string,
  stuck: PropTypes.bool,
  menuOpen: PropTypes.bool,
};

export default Nav;
