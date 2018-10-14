import styled from 'styled-components';

const sizes = {
  large: { wrapper: 96, icon: 48 },
  jumbo: { wrapper: 144, icon: 72 },
  default: { wrapper: 48, icon: 24 },
};

export const Wrapper = styled.i`
  width: ${({ size }) =>
    size ? `${sizes[size].wrapper}px` : `${sizes.default.wrapper}px`};
  height: ${({ size }) =>
    size ? `${sizes[size].wrapper}px` : `${sizes.default.wrapper}px`};
  border-radius: 100%;
  box-shadow: ${({ color }) =>
    color ? `inset 0 0 0 1px ${color}` : 'inset 0 0 0 1px #ffffff'};
  display: inline-flex;
  svg {
    margin: auto;
    width: ${({ size }) =>
      size ? `${sizes[size].icon}px` : `${sizes.default.icon}px`};
    height: ${({ size }) =>
      size ? `${sizes[size].icon}px` : `${sizes.default.icon}px`};
  }
`;
