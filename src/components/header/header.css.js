import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  z-index: 10000;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  margin-top: ${({ stuck }) => (stuck ? '0' : '0.75rem')};
  min-height: ${({ submenuOpen }) => (submenuOpen ? '3.5rem' : '3.5rem')};
  line-height: 3.5rem;
  position: ${({ stuck }) => (stuck ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease;
  &:before {
    box-shadow: 0 0.075rem 1rem 0 rgba(0, 0, 0, 0.125);
    transition: all 0.5s ease;
    background-size: auto, auto;
    background-repeat: repeat, no-repeat;
    content: '';
    display: block;
    height: ${({ stuck, submenuOpen }) =>
      stuck || submenuOpen ? '100%' : '0.75rem'};
    left: 0;
    position: absolute;
    padding-top: ${({ submenuOpen, stuck }) =>
      submenuOpen && stuck ? 0 : submenuOpen ? '0.75rem' : 0};
    top: ${({ stuck }) => (stuck ? '0' : '-0.75rem')};
    z-index: 900;
    width: 100%;
    background-color: #4797ec;
    background-image: url('/images/overlay.png'),
      linear-gradient(90deg, rgba(71, 151, 236, 0), #884beb 90%);
  }
  * {
    z-index: 950;
  }
`;
