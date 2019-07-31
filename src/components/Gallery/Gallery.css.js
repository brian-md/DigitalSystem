import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  > * {
    flex: 1;
  }
  & > div:not(.main) {
    /* padding: 2rem; */
    cursor: pointer;
    transition: 0.3s opacity ease;
    &:hover {
      opacity: 0.7;
    }
  }
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: start;
    grid-auto-rows: min-content;
    grid-gap: 1rem;
    & > div {
      width: 100%;
    }
  }

  & > * {
    border: 2px solid transparent;
    padding: 0.4rem;
  }
  & > .selected {
    border-color: brandLight;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  ${MEDIA.TABLET`
    flex-direction: column;
    `};
  .main {
    flex: 1.618;
    > p {
      margin-bottom: 0;
    }
    grid-column: span 5;
    img {
      max-height: 100%;
    }
  }
`;
