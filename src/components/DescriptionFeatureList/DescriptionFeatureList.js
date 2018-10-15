import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  FeatureList,
  Description,
} from './DescriptionFeatureList.css';
import { IconTitle, Title } from 'components';

const DescriptionFeatureList = ({ children, features, ...props }) => {
  return (
    <Wrapper>
      <Description>{children}</Description>

      <FeatureList>
        {features.map((feature, i) => {
          const Feature = feature.icon ? IconTitle : Title;
          return (
            <li key={i}>
              <Feature
                {...props}
                align="left"
                icon={feature.icon}
                size="small"
                noCaps
              >
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
  children: PropTypes.node.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
};

export { DescriptionFeatureList };
