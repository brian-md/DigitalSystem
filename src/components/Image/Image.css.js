import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  border-radius: ${({ circle }) => (circle ? '100%' : 'none')};
  overflow: hidden;
  box-shadow: 0 1rem 3rem 0 rgba(0, 0, 0, 0.25);
  img {
    border-radius: ${({ circle }) => (circle ? '100%' : 'none')};
  }
  ${MEDIA.DESKTOP`

  `};
  ${MEDIA.TABLET`

  `};
`;

export const SmallImage = styled(Container)`
  height: 10rem;
  width: 10rem;
`;
