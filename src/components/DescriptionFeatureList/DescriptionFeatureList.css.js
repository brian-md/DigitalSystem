import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  text-align: left;
  > p:only-of-type {
  }
`;

export const Description = styled.div`
  flex: 1.618;
  margin: auto;
  margin-right: 4rem;
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
`;
