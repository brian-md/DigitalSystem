import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './IconTitle.css';
import { Icon, Title } from 'components';

const IconTitle = ({ icon, children, ...props }) => (
  <Wrapper>
    <Icon icon={icon} />
    <Title {...props}>{children}</Title>
  </Wrapper>
);

IconTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export { IconTitle };
