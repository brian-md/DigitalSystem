import styled from 'styled-components';
import { Icon } from 'components';

export const StyledIcon = styled(Icon)`
  background: rgba(190, 190, 190, 0);
  transition: all 0.5s ease;
  cursor: pointer;
  :hover,
  :active,
  :focus {
    background: rgba(190, 190, 190, 0.1);
  }
`;
