import React from 'react';
import PropTypes from 'prop-types';
import ImageWings from 'components/imageWings';
import Button from 'components/button';
import { ButtonWrapper } from './imageWingTabs.css';
import Tabber from 'containers/tabber';

const ImageWingTabs = ({ data, invert }) => (
  <Tabber keys={data.map(tab => tab.name)}>
    {({ setTab, getVisibility }) => {
      const buttons = data.map(tab => (
        <Button
          size="tiny"
          invert={invert}
          noOutline={!getVisibility(tab.name)}
          key={tab.name}
          onClick={() => {
            setTab(tab.name);
          }}
        >
          {tab.name}
        </Button>
      ));

      const content = data.map(tab => (
        <ImageWings
          visible={getVisibility(tab.name)}
          invert={invert}
          key={tab.name}
          {...tab}
        />
      ));

      return (
        <>
          <ButtonWrapper>{buttons}</ButtonWrapper>
          {content}
        </>
      );
    }}
  </Tabber>
);

ImageWingTabs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      alt: PropTypes.string,
      image: PropTypes.object.isRequired,
      features: PropTypes.arrayOf(PropTypes.object),
      invert: PropTypes.bool,
      left: PropTypes.node,
      right: PropTypes.node,
      fixedImage: PropTypes.bool,
      description: PropTypes.string,
      cta: PropTypes.object,
    })
  ),
  invert: PropTypes.bool,
};

export default ImageWingTabs;
