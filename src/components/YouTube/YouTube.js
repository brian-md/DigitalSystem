import React from 'react';
import PropTypes from 'prop-types';
import { VideoWrapper } from './YouTube.css';

const YouTube = ({ title, url }) => {
  return (
    <VideoWrapper>
      <iframe
        title={title}
        src={url}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      />
    </VideoWrapper>
  );
};

YouTube.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export { YouTube };
