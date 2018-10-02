import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  flex-direction: column;
  padding: 10rem 0 8rem 0;
  overflow: hidden;
  background-color: rgba(58, 58, 58, 0.6);
  color: #ffffff;
  min-height: 50vh;
  position: relative;
  text-align: center;
  &::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1900' height='150' viewBox='0 0 1900 150' preserveAspectRatio='none'%3E%3Cpath d='M0,25.7C243.4,84,596.7,150,950,150c353.3,0,706.6-66,950-124.3V150H0V25.7z' fill='%23ffffff'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-position: center;
    bottom: -1px;
    content: '';
    height: 8rem;
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

export const SmallContainer = styled(Container)`
  min-height: 25vh;
  padding: 7rem 0 6rem 0;
`;

export const ImageWrapper = styled.div`
  position: fixed;
  left: 0;
  min-width: 100vw;
  top: 0;
  z-index: -4;
  ${MEDIA.MIN_TABLET`
    
  top: ${({ small }) => (small ? '-20rem' : 0)};
  > div {
    min-height: calc(100vh + 20rem);
  }
  `};
`;
