import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Inner = styled.div`
  margin: 0 auto;

  width: calc(100% - 8rem);
  ${MEDIA.DESKTOP`
    width: calc(100% - 6rem);
  `};
  ${MEDIA.TABLET`
    width: calc(100% - 2rem);
  `};
`;
