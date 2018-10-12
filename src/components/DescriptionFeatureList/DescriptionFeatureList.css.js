import styled from 'styled-components';
import { Paragraph } from 'components';

export const Wrapper = styled.div`
  display: flex;
  text-align: left;
  > p:only-of-type {
    flex: 1.618;
    margin: auto;
    margin-right: 4rem;
  }
`;

export const Description = styled(Paragraph)`
  flex: 1;
  background: black;
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  li {
    margin-bottom: 2rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;
