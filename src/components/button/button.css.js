import styled from 'styled-components';

export const BasicButton = styled.button`
  display: inline-block;
  padding: ${({ medium, large }) =>
    medium ? '0 2rem' : large ? '0 3rem' : '0 1.75rem'};
  text-align: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  white-space: nowrap;
  font-family: 'Dosis', sans-serif;
  border-radius: 3.5rem;
  cursor: pointer;
  height: ${({ medium, large }) =>
    medium ? '3rem' : large ? '4.375rem' : '2.625rem'};
  line-height: ${({ medium, large }) =>
    medium ? '3rem' : large ? '4.375rem' : '2.625rem'};
 
  border: none;
  box-shadow: ${({ invert }) =>
    invert ? 'inset 0 0 0 1px #ffffff' : 'inset 0 0 0 1px #000000'};
  border: none;
  background-color: transparent;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  outline: none;
  opacity: ${({ disabled }) => (disabled ? '0.25' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}
  width: ${({ fit }) => (fit ? '100%' : 'auto')};
  &, & a {
    color: ${({ invert }) => (invert ? '#ffffff ' : '#000000 ')};
    text-decoration: none;
    transition: all 0.25s ease-in-out;

    :active, :hover, :hover a {
        
        color: ${({ invert }) => (invert ? '#ffffff ' : '#4797ec ')};
  }
  }
  :hover,
  :focus,
  :active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  :active, :hover {
    box-shadow: ${({ invert }) =>
      invert ? 'inset 0 0 0 1px #ffffff' : 'inset 0 0 0 1px #4797ec'};

  }
`;

export const PrimaryButton = styled(BasicButton)`
  background-color: #4797ec;
  background-image: url('/images/overlay.png'),
    linear-gradient(45deg, rgba(71, 151, 236, 0), #884beb 80%);
  box-shadow: 0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.25);
  &,
  & a {
    color: #ffffff;
  }
  :hover,
  :focus {
    background-color: #6cacf0;
    box-shadow: 0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }
  :active {
    background-color: #2882e2;
    color: #ffffff;
    box-shadow: 0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.25);
  }
`;
