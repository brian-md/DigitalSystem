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

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 70rem;
  margin: auto;
  span {
    text-align: left;
  }
`;
