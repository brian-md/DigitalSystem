import styled, { keyframes } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const mobileMenuSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

export const Container = styled.nav`
white-space: nowrap
line-height: normal;
  &>ul {
    box-sizing: border-box;
    display: flex;
    list-style: none;
    padding: 0;
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
      &.current {
        background-color: rgb(255, 255, 255, 0.1)
      }
    }
    ${MEDIA.DESKTOP`
        flex-direction: column;
        background-image: url("/images/overlay.png"),linear-gradient(45deg, rgba(71, 151, 236, 0), #884beb 80%);
        background-color: #4797ec;
        overflow-y: scroll; 
  -webkit-overflow-scrolling: touch;
        justify-content: flex-start;
        animation: ${mobileMenuSlide} .5s ease;
        width: 100vw;
        position: fixed;
        height: 100vh;
        left: 0;
        transition: all 0.2s ease-in-out;
        opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};;
        top: ${({ menuOpen }) => (menuOpen ? '0' : '-100vh')};
        padding: 10vh 2rem;
        align-items: center;
        a, button {
          font-size: 1.3rem;
        }
      li {
        min-height: min-content
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    li {
      & + li {
        margin-left: 0;
      }
    }
  `};
  }
`;

export const Submenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  li,
  li a {
    padding: 0.3rem 0.6rem;
  }
  li {
    margin-left: 0.75rem;
    text-transform: none;
    padding: 0;
    display: flex;
    position: relative;
    &::after {
      content: '';
      height: 1rem;
      margin: auto;
      width: 1px;
      background: rgba(255, 255, 255, 0.6);
      position: relative;
      right: -0.375rem;
    }
    &:last-child::after {
      content: none;
    }
  }
  ${MEDIA.DESKTOP`
    flex-direction: column;
    &>li>a, button {
      font-size: 1rem;
    }
    li::after {
      content: none;
    }
  `};
`;
// keyframes returns a unique name based on a hash of the contents of the keyframes
const submenuSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

const mobileSubmenuSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-.5rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds

export const SubmenuWrapper = styled.dl`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  animation: ${submenuSlide} .5s ease;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
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
    display: flex;
    flex-direction: column;
    
    a {
      margin: 0;
      padding: 0;
      margin-top:-.1rem;
      font-size: 0.65rem;
      :active,
      :focus {
        box-shadow: none;
        text-decoration: underline;
      }
    }
  }
  ${MEDIA.DESKTOP`
    animation: ${mobileSubmenuSlide} .5s ease;
    padding: 1rem 0;
    margin: 1rem 0;
    background: rgba(0, 0, 0, 0.15);
    position: relative;
    flex-direction: column;
    overflow-y: scroll !important; 
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    max-height: 50vh;
    top: 0;
    width: 100vw;
    dt {
      border-right: none;
      margin: 0;
      padding: 0;
      display: none;
    }
  `};
  ${MEDIA.MIN_XL`
    padding: 1rem 20vw;
  `};
`;
