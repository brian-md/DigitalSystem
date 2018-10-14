import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './IconTitle.css';
import { Icon, Title } from 'components';

const IconTitle = ({ icon, children, ...props }) => {
  const { invert } = props;
  return (
    <Wrapper>
      <Icon color={invert ? undefined : 'rgba(0, 0, 0, 0.9)'} icon={icon} />
      <Title {...props}>{children}</Title>
    </Wrapper>
  );
};

IconTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export { IconTitle };
