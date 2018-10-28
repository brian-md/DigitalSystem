import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.p`
  display: block;
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
        return '0.9rem';
      default:
        return '1rem';
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
          return '0.9rem';
        default:
          return '1rem';
      }
    }};
  `};
`;
