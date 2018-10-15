import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ stacked }) =>
    stacked ? 'min-content' : 'min-content 1fr'};
  grid-template-rows: ${({ stacked }) => (stacked ? 'min-content 1fr' : '1fr')};
  grid-gap: 1rem;
  align-items: center;
  text-decoration: none;
  transition: all 0.25 ease;
  :hover {
    transform: ${({ to }) => (to ? 'scale(1.05)' : 'none')};
    i {
      background: ${({ to }) => (to ? 'rgba(255, 255, 255, 0.2)' : undefined)};
    }
  }
  > i {
    margin: auto;
  }
`;
