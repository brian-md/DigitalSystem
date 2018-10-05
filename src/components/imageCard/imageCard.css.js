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
  animation: ${popUp} 0.5s ease-in;
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  grid-gap: 6rem;
  grid-template-columns: ${({ flip }) => (flip ? '1fr 30rem' : '30rem 1fr')};
  grid-template-rows: 1fr;
  grid-template-areas: ${({ flip }) =>
    // eslint-disable-next-line
    flip ? '\'content image\'' : '\'image content\''};
  align-self: stretch;
  img {
    border-radius: 100%;
  }
  ${MEDIA.MIN_LARGE`
    div:first-child {
      max-width: 35vw;
    }
  `};
  ${MEDIA.LARGE`
  grid-template-columns: ${({ flip }) => (flip ? '1fr 20rem' : '20rem 1fr')};
  div:first-child {
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
    div:first-child {
        width: 20rem;
        margin: 0 auto;
    }
  `};
  ${MEDIA.PHONE`
    grid-template-columns: 1fr;
    grid-template-rows: 85vw 1fr;
    grid-template-areas: 
        'image'
        'content';
    div:first-child {
        max-width: 85vw;
        width: 85vw;
        margin: 0 auto;
    }
  `};
`;

export const SmallContainer = styled(Container)`
  grid-gap: 2rem;
  grid-template-columns: ${({ flip }) => (flip ? '1fr 10rem' : '10rem 1fr')};
  grid-template-rows: 1fr;
  ${MEDIA.LARGE`
  grid-template-columns: ${({ flip }) => (flip ? '1fr 10rem' : '10rem 1fr')};
  `};
  ${MEDIA.DESKTOP`
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 1fr;
    grid-template-areas: 
        'image'
        'content';
    grid-gap: 2rem;
    div:first-child {
        width: 10rem;
        margin: 0 auto;
    }
  `};
`;

export const ImageWrapper = styled.div`
  grid-area: image;
  margin: 0 auto;
`;
