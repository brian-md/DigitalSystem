import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
const sizes = {
  default: { all: '30rem', desktop: '20rem', phone: '15rem' },
  small: { all: '10rem' },
  medium: { all: '20rem', desktop: '15rem', phone: '10rem' },
};

export const MapWrapper = styled.div`
  max-width: 90vw;
  width: ${({ size }) => (size ? sizes[size].all : sizes.default.all)};
  height: ${({ size }) => (size ? sizes[size].all : sizes.default.all)};
  border-radius: 100%;
  overflow: hidden;
  ${MEDIA.DESKTOP`
  width: ${({ size }) =>
    size
      ? sizes[size].desktop
        ? sizes[size].desktop
        : sizes[size].all
      : sizes.default.desktop};
    height: ${({ size }) =>
      size
        ? sizes[size].desktop
          ? sizes[size].desktop
          : sizes[size].all
        : sizes.default.desktop};
  
  `};
`;
