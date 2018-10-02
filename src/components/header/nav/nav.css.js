import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
white-space: nowrap
line-height: normal;
  &>ul {
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
      &:focus, &.open-submenu {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

export const Submenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  li,
  li a {
    /* background: green; */
    text-transform: none;
    padding: 0;
  }
  li {
    display: flex;
  }
`;

export const SubmenuWrapper = styled.dl`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  transition: all 0.5s ease;
  transition: ${({ stuck, visible }) =>
    stuck
      ? 'opacity 0.2s ease 0s, top 0s ease 0.0s;'
      : visible
        ? 'opacity 0.2s ease 0.25s, top 0.0s ease 00s;'
        : 'opacity 0.2s ease 0.5s, top 0.1s ease 00s;'}
  min-height: 3.5rem;
  position: absolute;
  right: 0;
  top: ${({ visible }) => (visible ? '3.5rem' : '-50rem')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  z-index: -10;
  padding: 1rem 5rem;
  box-sizing: border-box;
  dt {
    text-transform: uppercase;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    text-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    padding-right: 1rem;
    margin-right: 1rem;
  }
  ${MEDIA.MIN_XL`
    padding: 1rem 20vw;
  `};
`;
