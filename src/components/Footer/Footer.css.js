import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

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
  grid-gap: 0.5rem;
  ${MEDIA.DESKTOP`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, min-content);
    grid-template-areas:
          'social social'
          'contact contact'
          'siteInfo nav'
          'copyright copyright';
    grid-gap: 2rem;
  `};
  ${MEDIA.TABLET`
    grid-template-columns: 1fr;
    grid-template-rows: 4rem repeat(4, min-content);
    grid-template-areas: 
            'social'
            'contact'
            'nav'
            'siteInfo'
            'copyright'
  `};
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
  svg {
    margin: 0;
  }
  ${MEDIA.TABLET`
    padding: 0 10vw;
    svg {
      margin: auto;
    }
  `};
  ${MEDIA.PHONE`
    padding: 0;
  `};
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
  > div,
  > a {
    margin-bottom: 1rem;
  }
  span {
    text-align: left;
  }
  ${MEDIA.DESKTOP`
    display: flex;
    justify-content: center;
    > div, >a {
      margin-right: 1rem;
    }
    > div:last-of-type, >a:last-of-type {
      margin-right: 0;
    }
  `};
  ${MEDIA.TABLET`
    flex-direction: column;
    margin: 0;
    align-items: center;
  `};
  ${MEDIA.PHONE`
    align-items: flex-start;
    padding: 0 5vw;
  `};
`;

export const Nav = styled.nav`
  grid-area: nav;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  ${MEDIA.PHONE`
    flex-direction: column;
  `};
`;

export const NavList = styled.div`
  h3 {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }
  ul {
    li {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }
  ${MEDIA.PHONE`
    margin-bottom: 1rem;
    text-align: center;
    &:last-of-type {
      margin-bottom: 0;
    }
  `};
`;

export const Copyright = styled.div`
  grid-area: copyright;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 2rem;
`;
