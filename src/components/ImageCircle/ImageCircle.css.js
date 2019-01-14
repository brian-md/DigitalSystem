import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
const sizes = {
  default: { all: '22rem', desktop: '12rem', phone: '11rem' },
  small: { all: '10rem' },
  medium: { all: '20rem', desktop: '15rem', phone: '10rem' },
};

export const ImageWrapper = styled.div`
  max-width: 90vw;
  width: ${({ size }) => (size ? sizes[size].all : sizes.default.all)};
  height: ${({ size }) => (size ? sizes[size].all : sizes.default.all)};
  ${MEDIA.DESKTOP`
  width: ${({ size }) =>
    size
      ? sizes[size].desktop
        ? sizes[size].desktop
        : sizes[size].all
      : sizes.default.desktop};
  
  `};
  ${MEDIA.PHONE`
      display: ${({ responsiveImage }) =>
        responsiveImage ? 'none' : undefined}
  `}
`;
