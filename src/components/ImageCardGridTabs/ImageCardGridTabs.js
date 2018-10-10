import React from 'react';
import PropTypes from 'prop-types';
import { Tabber } from 'containers';
import { Button, ImageCardGrid } from 'components';
import { ButtonWrapper } from './ImageCardGridTabs.css';

const ImageCardGridTabs = ({ data, invert }) => {
  return (
    <Tabber keys={data.map(card => card.name)}>
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
          <ImageCardGrid
            visible={getVisibility(tab.name)}
            invert={invert}
            key={tab.name}
            features={tab.features}
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
};

ImageCardGridTabs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          alt: PropTypes.string,
          image: PropTypes.object.isRequired,
          description: PropTypes.string,
          cta: PropTypes.object,
        })
      ),
      description: PropTypes.string,
      cta: PropTypes.object,
    })
  ),
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

export { ImageCardGridTabs };
