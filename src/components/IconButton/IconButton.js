import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledIcon } from './IconButton.css';

const Wrapper = ({ to, href, children, ...props }) => {
  return to ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

const IconButton = ({ to, href, ...props }) => {
  return to || href ? (
    <Wrapper
      to={to}
      href={href}
      target={href && to == undefined ? '_blank' : undefined}
      rel={href && to == undefined ? 'noopener' : undefined}
      {...props}
    >
      <StyledIcon {...props} />
    </Wrapper>
  ) : (
    <StyledIcon {...props} />
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
};

export { IconButton };
