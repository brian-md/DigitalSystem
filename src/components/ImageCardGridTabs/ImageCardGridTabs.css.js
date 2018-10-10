import styled from 'styled-components';
// import MEDIA from 'helpers/mediaTemplates';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  > * {
    margin: 0.5rem 0.5rem;
  }
`;
