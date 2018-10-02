import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { BasicButton, PrimaryButton } from './button.css';

const Button = ({ children, primary, to, href, ...props }) => {
  const StyledButton = primary ? PrimaryButton : BasicButton;
  return to ? (
    <StyledButton as={Link} to={to} {...props}>
      {children}
    </StyledButton>
  ) : href ? (
    <StyledButton as="a" href={href} {...props}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  big: PropTypes.bool,
  large: PropTypes.bool,
  primary: PropTypes.bool,
  fit: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
