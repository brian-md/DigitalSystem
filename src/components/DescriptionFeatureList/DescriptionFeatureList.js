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
          const { icon, description, html } = feature;
          return (
            <li key={i}>
              <Feature
                {...props}
                align="left"
                icon={icon}
                size="small"
                html={html}
                noCaps
              >
                {description}
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
      html: PropTypes.bool,
    })
  ),
};

export { DescriptionFeatureList };
