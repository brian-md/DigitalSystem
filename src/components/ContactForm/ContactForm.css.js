import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-column-gap: 1rem;
  ${MEDIA.PHONE`
    display: flex;
    flex-direction: column;
  `};
`;

export const SingleColumn = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TwoColumn = styled.form`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 1rem;
  grid-template-areas:
    '. .'
    '. .'
    'button button';
  ${MEDIA.PHONE`
    display: flex;
    flex-direction: column;
  `};
`;

export const ButtonWrapper = styled.div`
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
