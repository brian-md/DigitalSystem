import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ stacked }) =>
    stacked ? 'min-content' : 'min-content 1fr'};
  grid-template-rows: ${({ stacked }) => (stacked ? 'min-content 1fr' : '1fr')};
  grid-gap: 1rem;
  align-items: center;
  > i {
    margin: auto;
  }
`;
