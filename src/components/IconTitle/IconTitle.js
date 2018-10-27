import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Wrapper } from './IconTitle.css';
import { Icon, Title } from 'components';

const IconTitle = ({ icon, children, onClick, stacked, ...props }) => {
  const { invert, iconSize, titleSize, to, href } = props;
  // const IconElement = to || href ? IconButton : Icon;
  return (
    <Wrapper
      stacked={stacked}
      as={to ? Link : onClick || href ? 'a' : undefined}
      to={to}
      onClick={onClick}
      onKeyUp={onClick}
      role={onClick ? 'button' : undefined}
      href={href}
      target={href && '_blank'}
    >
      <Icon
        size={iconSize}
        color={invert ? undefined : 'rgba(0, 0, 0, 0.7)'}
        icon={icon}
      />
      <Title size={titleSize} {...props}>
        {children}
      </Title>
    </Wrapper>
  );
};

IconTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  stacked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  iconSize: PropTypes.oneOf(['small', 'large', 'jumbo']),
  titleSize: PropTypes.oneOf(['small', 'large']),
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export { IconTitle };
