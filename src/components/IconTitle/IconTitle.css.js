import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ stacked }) =>
    stacked ? 'min-content' : 'min-content 1fr'};
  grid-template-rows: ${({ stacked }) => (stacked ? 'min-content 1fr' : '1fr')};
  grid-gap: 1rem;
  background: none;
  border: none;
  font-family: inherit;
  color: inherit
  align-items: center;
  text-decoration: none;
  cursor: ${({ to, onClick, href }) =>
    to || onClick || href ? 'pointer' : undefined}
  transition: all 0.25 ease;
  :hover {
    opacity: ${({ to, onClick, href }) =>
      to || onClick || href ? 0.6 : undefined};
    i {
    transform: ${({ to, onClick, href }) =>
      to || onClick || href ? 'scale(1.05)' : 'none'};
      background: ${({ to, onClick, href }) =>
        to || onClick || href ? 'rgba(255, 255, 255, 0.2)' : undefined};
    }
  }
  > i {
    margin: auto;
  }
`;
