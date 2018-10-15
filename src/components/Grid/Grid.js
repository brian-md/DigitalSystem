import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Grid = styled.div`
  display: ${({ visible, flex }) =>
    visible ? (flex ? 'flex' : 'grid') : 'none'};
  align-items: flex-start;
  justify-content: center;
  grid-template-columns: ${({ size }) =>
    size
      ? `repeat(auto-fill, minmax(${size}rem, 1fr))`
      : 'repeat(auto-fill, minmax(25rem, 1fr))'};
  grid-gap: 2rem;
  flex-wrap: wrap;
  > * {
    margin: ${({ flex }) => (flex ? '1rem 2rem' : undefined)};
  }
  margin: auto;
  ${MEDIA.DESKTOP`
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    > * {
    margin: ${({ flex }) => (flex ? '0.5rem 1rem' : undefined)};
  }
    `};
`;

Grid.defaultProps = {
  visible: true,
};
