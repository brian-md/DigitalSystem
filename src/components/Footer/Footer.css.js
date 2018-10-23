import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 4rem 1fr min-content;
  grid-template-areas:
    'siteInfo social contact'
    'siteInfo nav contact'
    'copyright copyright copyright';
  font-weight: 100;
  text-align: left;
`;

export const SiteInfo = styled.div`
  grid-area: siteInfo;
`;

export const Social = styled.ul`
  grid-area: social;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;

export const Contact = styled.div`
  grid-area: contact;
  span {
    text-align: left;
  }
`;

export const Nav = styled.dl`
  grid-area: nav;
`;

export const Copyright = styled.div`
  grid-area: copyright;
  text-align: center;
  font-size: 0.8rem;
`;
