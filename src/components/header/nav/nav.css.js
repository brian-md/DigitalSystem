import styled from 'styled-components';

export const Container = styled.nav`
align-self: flex-start;
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    a,
    li {
    }
    li {
      & + li {
        margin-left: .75rem;
      }
    }
    a,
    button {
      color: #ffffff;
      transition: color 0.2s ease;
      text-decoration: none;
      cursor: pointer;
      background: none;
      outline: none;
      border: none;
      text-transform: uppercase;
      font-size: 0.9rem;
      border-radius: 2rem;
      padding: 0.625rem 1.5rem
      font-family: inherit;
      &:hover,
      
      &:active {
        color: #dadada;
      }
      &:active,
      &:focus {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

export const Submenu = styled.ul`
  transition: all 0.5s ease;

  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  bottom: ${({ visible }) => (visible ? '0' : '50rem')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  z-index: -1;
  li,
  li a {
    /* background: green; */
    text-transform: none;
  }
  /* background: pink; */
`;
