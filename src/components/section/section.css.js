import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  flex-direction: column;
  padding: 6rem 0 4rem 0;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  text-align: center;
  &::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1900' height='150' viewBox='0 0 1900 150' preserveAspectRatio='none'%3E%3Cpath d='M0,25.7C243.4,84,596.7,150,950,150c353.3,0,706.6-66,950-124.3V150H0V25.7z' fill='%23ffffff'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-position: center;
    bottom: -1px;
    content: '';
    height: 0rem;
    left: 0;
    position: absolute;
    width: 100%;
    box-shadow: inset 0 -1px 0 0 #ffffff;
  }
  ${MEDIA.DESKTOP`
    &::after {
        background-size: 125% 100%;
        height: 6rem;
    }
  `};
  ${MEDIA.TABLET`
    &::after {
        background-size: 125% 100%;
        height: 4rem;
    }
    min-height: 0;
  `};
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 75rem;
  max-width: calc(100% - 8rem);
  ${MEDIA.DESKTOP`
    max-width: calc(100% - 6rem);
  `};
  ${MEDIA.TABLET`
    max-width: calc(100% - 4rem);
  `};
`;
