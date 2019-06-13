import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'components';

const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};

wrapPageElement.defaultProps = {
  props: [],
};

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.array,
};

export default wrapPageElement;
