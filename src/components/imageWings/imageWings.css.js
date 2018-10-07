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
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  animation: ${popUp} 0.5s ease-in;
  grid-template-columns: 1fr 30rem 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'left middle right';
  grid-gap: 3rem;
  ${MEDIA.LARGE`
  grid-template-columns: 1fr 20rem 1fr;
  `};
  ${MEDIA.DESKTOP`
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 
                    'middle middle'
                    'left right';
  `};

  ${MEDIA.PHONE`
    /* grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content;
    grid-template-areas:
                    "middle"
                    "left"
                    "right";
     */
     display: ${({ visible }) => (visible ? 'flex' : 'none')};;
     flex-direction: column;
  `};
`;

export const Middle = styled.div`
  display: grid;
  grid-area: middle;
  grid-template-columns: 30rem;
  grid-template-rows: min-content min-content min-content;
  margin: auto;
  grid-gap: 2rem;
  > p:only-of-type {
    padding: 0 2rem;
    margin: 0 !important;
  }
  ${MEDIA.LARGE`
  grid-template-columns: 20rem;
  grid-template-rows: min-content min-content min-content;  
  margin-bottom: 2rem;
    `};
  ${MEDIA.DESKTOP`
    grid-gap: 1rem;
    
    `} ${MEDIA.PHONE`
  grid-template-columns: 80vw;
  grid-template-rows: min-content min-content min-content;  
  > p:only-of-type {
    padding: 0 0.5rem;
  }
`};
`;

const Wing = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto;
  ${MEDIA.DESKTOP`
  margin: 0;
  `};
`;

export const Left = styled(Wing)`
  grid-area: left;
`;

export const Right = styled(Wing)`
  grid-area: right;
`;
