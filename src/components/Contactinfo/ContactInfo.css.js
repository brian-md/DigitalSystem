import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 70rem;
  margin: auto;
  span {
    text-align: left;
  }
  ${MEDIA.TABLET`
  flex-direction: column;
  align-items: center;
`};
`;
