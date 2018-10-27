import React from 'react';
import PropTypes from 'prop-types';
import { IconTitle } from 'components';
import { ContactWrapper } from './ContactInfo.css';
const ContactInfo = ({ style, ...props }) => {
  return (
    <ContactWrapper style={style}>
      <IconTitle {...props} icon="phone" href="tel:888-90-Digital">
        888-90-Digital
      </IconTitle>
      <IconTitle
        {...props}
        icon="email"
        href="mailto:info@digitalsystemsav.com"
      >
        info@digitalsystemsav.com
      </IconTitle>
    </ContactWrapper>
  );
};

ContactInfo.propTypes = {
  style: PropTypes.object,
};

export { ContactInfo };
