import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Wrapper = styled.ul`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  margin: auto;
  ${MEDIA.DESKTOP`
grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`};
`;
