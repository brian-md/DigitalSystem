import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
const getMargin = align =>
  ({
    center: '0 auto',
    left: '0 auto 0 0',
    right: '0 0 0 auto',
  }[align]);

export const Text = styled.span`
  display: block;
  font-weight: ${({ bold }) => (bold ? 900 : 100)};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '3.5rem';
      case 'large':
        return '2.5rem';
      case 'small':
        return '1.35rem';
      default:
        return '1.75rem';
    }
  }};
  text-align: ${({ align }) => align};
  line-height: 1.2;
  text-transform: uppercase;
  padding-bottom: ${({ line }) => (line ? '0.87em' : '0')};
  margin: ${({ line }) => (line ? '0 0 0.87em 0' : '0')};
  &::after {
    position: relative;
    top: 0.75em;
    content: '';
    height: 2px;
    display: ${({ line }) => (line ? 'block' : 'none')};
    margin: ${({ align }) => getMargin(align)};
    width: 5rem;
    background-color: #4797ec;
    background-image: url(/images/overlay.png),
      linear-gradient(90deg, rgba(71, 151, 236, 0), #884beb 90%);
    background-size: auto, auto;
    background-repeat: repeat, no-repeat;
    box-sizing: content-box;
    background: ${({ invert }) => (invert ? 'white' : 'auto')};
  }
  ${MEDIA.DESKTOP`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'xl':
          return '3.2rem';
        case 'large':
          return '2.3rem';
        case 'small':
          return '1.25rem';
        default:
          return '1.5rem';
      }
    }};
  `};
  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'xl':
          return '2.9rem';
        case 'large':
          return '2.0rem';
        case 'small':
          return '1.1rem';
        default:
          return '1.25rem';
      }
    }};
  `};
`;
