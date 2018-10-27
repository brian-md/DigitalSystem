import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FlexColumns = styled.div`
  display: flex;
  text-align: left;

  ${MEDIA.DESKTOP`
    flex-direction: column;
  `};
`;
