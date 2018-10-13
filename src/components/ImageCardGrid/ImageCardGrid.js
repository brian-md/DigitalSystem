import React from 'react';
import PropTypes from 'prop-types';
import { ImageCard } from 'components';
import { Wrapper } from './ImageCardGrid.css';

const ImageCardGrid = ({ features, stacked, invert, visible, small }) => {
  return (
    <Wrapper visible={visible} small={small}>
      {features.map(feature => (
        <ImageCard
          stacked={stacked}
          as="li"
          key={feature.title}
          size="small"
          {...feature}
          invert={invert}
        />
      ))}
    </Wrapper>
  );
};

ImageCardGrid.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      alt: PropTypes.string,
      image: PropTypes.object.isRequired,
      description: PropTypes.string,
      cta: PropTypes.object,
    })
  ),
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  visible: PropTypes.bool,
  small: PropTypes.bool,
  stacked: PropTypes.bool,
};

ImageCardGrid.defaultProps = {
  visible: true,
};

export { ImageCardGrid };
