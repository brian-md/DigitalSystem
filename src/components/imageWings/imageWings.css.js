import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 30rem 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'left middle right';
  grid-gap: 3rem;
  ${MEDIA.LARGE`
  grid-template-columns: 1fr 20rem 1fr;
  `};
  ${MEDIA.DESKTOP`
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
     display: flex;
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
  ${MEDIA.LARGE`
  grid-template-columns: 20rem;
  grid-template-rows: min-content min-content min-content;  

    `};
  ${MEDIA.PHONE`
grid-template-columns: 15rem;
  grid-template-rows: min-content min-content min-content;  

`};
  > p:only-of-type {
    margin-bottom: 0;
    padding: 0 2rem;
  }
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
