import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => <span>[{icon}]</span>;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export { Icon };
