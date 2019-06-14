import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { BasicButton, PrimaryButton } from './Button.css';

const Button = ({ children, to, href, primary, invert, ...props }) => {
  const StyledButton = primary ? PrimaryButton : BasicButton;
  return to ? (
    <StyledButton as={Link} to={to} invert={invert ? 1 : 0} {...props}>
      {children}
    </StyledButton>
  ) : href ? (
    <StyledButton as="a" href={href} invert={invert ? 1 : 0} {...props}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton invert={invert ? 1 : 0} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  fit: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  to: PropTypes.string,
  noOutline: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'regular', 'medium', 'large', 'tiny']),
};

export { Button };
