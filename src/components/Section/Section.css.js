import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  flex-direction: column;
  padding: 6rem 0 8rem 0;
  padding-top: ${({ top, flipTop }) => (top && !flipTop ? '14.75rem' : '6rem')}
  overflow: visible;
  background-color: ${({ bg }) => () => {
    switch (bg) {
      case 'white':
        return '#ffffff';
      case 'purple':
        return '#4797ec';
      case 'grey':
        return '#fafafa';
    }
  }};
  background-image: ${({ bg }) => () => {
    switch (bg) {
      case 'white':
        return 'none';
      case 'purple':
        return 'url("/images/overlay.png"),linear-gradient(45deg, rgba(71, 151, 236, 0), #884beb 80%)';
      case 'grey':
        return 'url("/images/overlay.png"),linear-gradient(45deg, rgba(71, 151, 236, 0), #ddddddd 80%)';
    }
  }};
  color: ${({ bg }) => () => {
    switch (bg) {
      case 'purple':
        return '#ffffff';
      default:
        return '#000000';
    }
  }};
  position: relative;
  text-align: center;

  &::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1900' height='150' viewBox='0 0 1900 150' preserveAspectRatio='none'%3E%3Cpath d='M0,25.7C243.4,84,596.7,150,950,150c353.3,0,706.6-66,950-124.3V150H0V25.7z' fill='%23ffffff'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    background-position: center;
    bottom: -1px; // eslint-disable-next-line
    content: ${({ bottom }) => (bottom ? "''" : 'none')};;
    height: ${({ bottom }) => (bottom ? '8rem' : '0')};
    left: 0;
    position: absolute;
    width: 100%;
    box-shadow: inset 0 -1px 0 0 #ffffff;
  }
  &::before {
    background-image: ${({ flipTop }) =>
      flipTop // eslint-disable-next-line
        ? 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1900\' height=\'150\' viewBox=\'0 0 1900 150\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,25.7C243.4,84,596.7,150,950,150c353.3,0,706.6-66,950-124.3V150H0V25.7z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")'// eslint-disable-next-line
        : "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1900' height='150' viewBox='0 0 1900 150' preserveAspectRatio='none'%3E%3Cpath d='M0,0h1900c-243.3,58.2-596.3,123.9-949.4,124h-1.2C596.3,123.9,243.3,58.2,0,0z' fill='%23ffffff'/%3E%3C/svg%3E\")"};
    transform: ${({ flipTop }) => (flipTop ? 'scaleY(-1)' : 'none')};
    background-size: 100% 100%;
    background-position: center;
    content: "";
    height: ${({ top }) => (top ? '8rem' : '0')};
    left: 0;
    position: absolute;
    top: -1px;
    width: 100%;
  }
  ${MEDIA.DESKTOP`
    &::after, &::before {
        background-size: 125% 100%;
        height: 6rem;
    }
  `};
  ${MEDIA.TABLET`
    &::after, &::before {
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
