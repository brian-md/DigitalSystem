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
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  medium: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  large: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  fit: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

export default Button;
