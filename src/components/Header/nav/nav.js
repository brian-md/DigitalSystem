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
            role="menuitem"
            to={item.to}
            className={location && location === item.to ? 'current' : undefined}
            aria-current={location && location === item.to ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ) : (
          <button
            onClick={() => toggleSubmenu(item.name)}
            role="menuitem"
            aria-haspopup="true"
            className={
              item.name == currentSubmenu
                ? 'open-submenu'
                : location && location.includes(item.to)
                ? 'current'
                : undefined
            }
            aria-controls={
              item.name == currentSubmenu
                ? `main-nav-${item.name}-submenu`.replace(/ /g, '')
                : undefined
            }
          >
            {item.name}
          </button>
        )}
        {item.submenu && (
          <SubmenuWrapper stuck={stuck} visible={item.name == currentSubmenu}>
            <dt>{item.name}</dt>
            <dd>
              <Submenu
                stuck={stuck}
                role="menu"
                aria-label={item.name}
                visible={item.name == currentSubmenu}
              >
                {item.submenu.map(menuItem => (
                  <li key={menuItem.name} role="none">
                    <Link
                      role="menuitem"
                      className={
                        location &&
                        location.includes(menuItem.to) &&
                        menuItem.name !== 'See All'
                          ? 'current'
                          : undefined
                      }
                      aria-current={
                        location &&
                        location.includes(menuItem.to) &&
                        menuItem.name !== 'See All'
                          ? 'page'
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
    <Container
      submenuOpen={submenuOpen}
      menuOpen={menuOpen}
      aria-label="Main Menu"
    >
      <ul role="menubar">{mappedMenu}</ul>
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
