import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  grid-area: content;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0;
  h3 {
    padding-bottom: ${({ small }) => (small ? '0.5rem' : 'auto')};
  }
  > p:only-of-type {
    margin-bottom: ${({ small }) => (small ? '1rem' : '2rem')};
  }
  ${MEDIA.DESKTOP`
    padding-bottom: 2rem;
    button {
      align-self: center;
    }
  `};
  ${MEDIA.PHONE`
    align-items: stretch;
    button {
      align-self: stretch;
    }
  `};
`;
