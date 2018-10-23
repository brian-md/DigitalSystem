import styled from 'styled-components';

const sizes = {
  medium: { wrapper: 72, icon: 36, border: 2 },
  large: { wrapper: 96, icon: 48, border: 2 },
  jumbo: { wrapper: 144, icon: 72, border: 2 },
  default: { wrapper: 48, icon: 24, border: 1 },
};

export const Wrapper = styled.i`
  transition: all 0.25s ease;
  width: ${({ size }) =>
    size ? `${sizes[size].wrapper}px` : `${sizes.default.wrapper}px`};
  height: ${({ size }) =>
    size ? `${sizes[size].wrapper}px` : `${sizes.default.wrapper}px`};
  border-radius: 100%;
  box-shadow: ${({ color, size }) =>
    color
      ? size
        ? `inset 0 0 0 ${sizes[size].border}px ${color}`
        : `inset 0 0 0 ${sizes.default.border}px ${color}`
      : size
        ? `inset 0 0 0 ${sizes[size].border}px #ffffff`
        : 'inset 0 0 0 1px #ffffff'};
  display: inline-flex;
  svg {
    margin: auto;
    width: ${({ size }) =>
      size ? `${sizes[size].icon}px` : `${sizes.default.icon}px`};
    height: ${({ size }) =>
      size ? `${sizes[size].icon}px` : `${sizes.default.icon}px`};
  }
`;
