import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 4rem 1fr min-content;
  grid-template-areas:
    'social social social'
    'siteInfo nav contact'
    'copyright copyright copyright';
  font-weight: 100;
  text-align: left;
`;

export const SiteInfo = styled.div`
  grid-area: siteInfo;
  p:only-of-type {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
  address {
    font-size: 0.8rem;
  }
`;

export const Social = styled.ul`
  grid-area: social;
  display: flex;
  justify-content: center;
  align-content: center;
  > * {
    margin: 0 1rem;
  }
`;

export const Contact = styled.div`
  grid-area: contact;
  > div {
    margin-bottom: 1rem;
  }
  span {
    text-align: left;
  }
`;

export const Nav = styled.nav`
  grid-area: nav;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

export const NavList = styled.div`
  h3 {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }
`;

export const Copyright = styled.div`
  grid-area: copyright;
  text-align: center;
  font-size: 0.8rem;
`;
