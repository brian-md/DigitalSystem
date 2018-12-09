import styled, { keyframes } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const popUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${popUp} 0.5s ease-in;
  transition: all 0.5s ease-in-out;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  display: ${({ visible, stacked }) =>
    visible ? (stacked ? 'flex' : 'grid') : 'none'};
  grid-gap: 6rem;
  grid-template-columns: ${({ flip }) => (flip ? '1fr 30rem' : '30rem 1fr')};
  grid-template-rows: 1fr;
  grid-template-areas: ${({ flip }) =>
    // eslint-disable-next-line
    flip ? '\'content image\'' : '\'image content\''};
  align-self: stretch;
  > div:first-child {
    align-self: center;
    margin: ${({ stacked }) => (stacked ? '0' : undefined)};

    margin-bottom: ${({ stacked }) => (stacked ? '2rem' : undefined)};
  }
  img {
    border-radius: 100%;
  }
  ${MEDIA.MIN_LARGE`
    >div:first-child {
      max-width: 35vw;
    }
  `};
  ${MEDIA.LARGE`
  grid-template-columns: ${({ flip }) => (flip ? '1fr 20rem' : '20rem 1fr')};
  >div:first-child {
        width: 20rem;
        height: 20rem;
    }
  `};

  ${MEDIA.DESKTOP`
    grid-template-columns: 1fr;
    grid-template-rows: 20rem 1fr;
    grid-template-areas: 
        'image'
        'content';
    grid-gap: 2rem;
    >div:first-child {
        width: 20rem;
        margin: 0 auto;
        margin-bottom: ${({ stacked }) => (stacked ? '1rem' : undefined)};

    }
  `};
  ${MEDIA.PHONE`
    grid-template-columns: 1fr;
  grid-template-rows: ${({ responsiveImage }) =>
    responsiveImage ? '0 1fr' : '75vw 1fr'};
    grid-template-areas: 
        'image'
        'content';
    >div:first-child {
        max-width: 75vw;
        width: 75vw;
        height: 75vw;
        margin: 0 auto;
        margin-bottom: ${({ stacked }) => (stacked ? '1rem' : undefined)};

    }
  `};
`;

export const SmallContainer = styled(Container)`
  grid-gap: 2rem;
  grid-template-columns: ${({ flip }) => (flip ? '1fr 10rem' : '10rem 1fr')};
  grid-template-rows: 1fr;
  > div:first-child {
    width: 10rem;
    height: 10rem;
  }

  ${MEDIA.LARGE`
  grid-template-columns: ${({ flip }) => (flip ? '1fr 10rem' : '10rem 1fr')};
  >div:first-child {
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
    }
  `};
  ${MEDIA.DESKTOP`
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 1fr;
    grid-template-areas: 
        'image'
        'content';
    grid-gap: 2rem;
    >div:first-child {
        width: 10rem;
        margin: 0 auto;
    }
  `};
`;

export const ImageWrapper = styled.div`
  grid-area: image;
  margin: 0 auto;
`;
