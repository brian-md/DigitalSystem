import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.button`
  height: 1.3rem;
  box-sizing: content-box;
  margin: auto;
  margin-right: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  background: rgba(255, 255, 255, 0);
  padding: 0.5rem;
  display: none;
  ${MEDIA.DESKTOP`
  display: flex;
  align-items: center
  .menu-label {
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-right: 0.5rem;
  }
  svg {
      width: 1.2rem
      opacity: 0.8
  }
`};
  :hover,
  :active {
    background: rgba(255, 255, 255, 0.08);
    outline: none;
  }
  :focus {
    outline: none;
    background: rgba(255, 255, 255, 0.05);
  }
`;
