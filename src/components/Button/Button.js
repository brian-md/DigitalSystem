import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { BasicButton, PrimaryButton } from './Button.css';

const Button = ({ children, to, href, primary, ...props }) => {
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
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  fit: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  to: PropTypes.string,
  noOutline: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'regular', 'medium', 'large', 'tiny']),
};

export { Button };
