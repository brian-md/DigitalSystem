import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Wrapper = styled.div`
  display: flex;
  text-align: left;
  > p:only-of-type {
  }

  ${MEDIA.DESKTOP`
    flex-direction: column;
  `};
`;

export const Description = styled.div`
  flex: 1.618;
  margin: auto;
  margin-right: 4rem;

  ${MEDIA.DESKTOP`
    margin-right: 0;
    margin-bottom: 1rem;
  `};
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto;
  flex: 1;
  li {
    margin-bottom: 2rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
  ${MEDIA.DESKTOP`
    padding: 0 7vw;
  `};
  ${MEDIA.PHONE`
    padding: 0;
  `};
`;
