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

export const LocationMarker = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  background-color: #4797ec;
  background-image: url('/images/overlay.png'),
    linear-gradient(45deg, rgba(71, 151, 236, 0), #884beb 80%);
  box-shadow: 0 0.5rem 1.75rem 0 rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  opacity: 0.8;
  ::after {
    content: 'Our Location';
    text-transform: uppercase;
    position: absolute;
    font-size: 0.8rem;
    left: -1rem;
    bottom: -3rem;
  }
`;
