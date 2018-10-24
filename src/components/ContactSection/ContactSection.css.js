import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ twoCol }) => (twoCol ? '1.618fr 1fr' : '1fr')};
  grid-template-areas: 'message form';
  grid-gap: 3rem;
  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
  `};
`;
