import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, FeatureList } from './DescriptionFeatureList.css';
import { IconTitle, Title, Paragraph } from 'components';

const DescriptionFeatureList = ({ description, features }) => {
  return (
    <Wrapper>
      <Paragraph style={{ flex: '1' }} center={false}>
        {description}
      </Paragraph>
      <FeatureList>
        {features.map(feature => {
          const Feature = feature.icon ? IconTitle : Title;
          return (
            <li key={feature.description}>
              <Feature align="left" icon={feature.icon} size="small" noCaps>
                {feature.description}
              </Feature>
            </li>
          );
        })}
      </FeatureList>
    </Wrapper>
  );
};

DescriptionFeatureList.propTypes = {
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
};

export { DescriptionFeatureList };
