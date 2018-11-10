import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.5s ease-in-out;
  padding: 1rem 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible, flip }) =>
    visible
      ? 'translateX(0)'
      : flip
        ? 'translateX(-10rem)'
        : 'translateX(10rem)'};

  > p:only-of-type,
  div > p:only-of-type {
    margin-top: ${({ small }) => (small ? '0.5rem' : '0')};

    margin-bottom: ${({ small, cta }) =>
      !cta ? '0' : small ? '1rem' : '2rem'};
  }
  ${MEDIA.DESKTOP`
    padding-bottom: 2rem;
    button {
      align-self: center;
    }
  `};
  ${MEDIA.PHONE`
    align-items: ${({ small }) => (small ? 'flex-start' : 'stretch')};
    button {
      align-self: flex-start;
    }
  `};
`;
