import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Wrapper = styled.ul`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  align-items: flex-start;
  grid-template-columns: ${({ small }) =>
    small
      ? 'repeat(auto-fill, minmax(17rem, 1fr))'
      : 'repeat(auto-fill, minmax(25rem, 1fr))'};
  grid-gap: 2rem;
  margin: auto;
  ${MEDIA.DESKTOP`
grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`};
`;
