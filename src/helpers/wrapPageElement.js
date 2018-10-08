import React from 'react';
import { Transition } from 'components';

const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};

export default wrapPageElement;
