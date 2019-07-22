import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.p`
  display: block;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-align: ${({ center }) => (center ? 'center' : 'left')}
  font-weight: ${({ bold }) => (bold ? 900 : 100)};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '2.5rem';
      case 'large':
        return '1.75rem';
      case 'medium':
        return '1.5rem';
      case 'small':
        return '1.05rem';
      default:
        return '1.2rem';
    }
  }};
  margin: 0;
  line-height: 2;
  letter-spacing: 0.1px;
  margin-bottom: ${({ html }) => (html ? 0 : '2rem')};
  &:only-of-type {
    margin-bottom: ${({ html }) => (html ? 0 : '2rem')};
  }
  p {
    margin-bottom: 2rem;
  }
  h2, h3, h4, h5, h6 {
    font-weight: 900;
  }
  h2 {
    font-size: 130%;
  }
  h3 {
    font-size: 120%;
  }
  h4 {
    font-size: 115%;
  }
  h5 {
    font-size: 110%;
  }
  h6 {
    font-size: 105%;
  }
  ul li {
    list-style-type: circle;
    list-style-position: inside;
  }
  ul, ol {
   margin-bottom: 2rem;
  }

  ol li {
    list-style-type: decimal;
    list-style-position: inside;

  }
  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'xl':
          return '2rem';
        case 'large':
          return '1.7rem';
        case 'medium':
          return '1.3rem';
        case 'small':
          return '1rem';
        default:
          return '1.1rem';
      }
    }};
  `};
`;
