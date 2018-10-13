import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Dosis:200,400,700');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  p:only-of-type {
    margin: 0;
  }
  strong {
    font-weight: 900;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 11pt;
    ${MEDIA.MIN_TABLET`
    font-size: 12pt;
  `};  
  ${MEDIA.MIN_DESKTOP`
    font-size: 12pt;
  `};
    ${MEDIA.MIN_XL`
    font-size: 14pt;
  `};
  }

  body {
    font-family: 'Dosis', sans-serif;;
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    /* color: ${accent}; */
    text-decoration: underline;
    color: inherit;
    text-decoration-skip: edges;
    transition: all 0.2s ease;
    :visited {
      color: inherit;
    }
    :hover, :focus, :active {
      opacity: 0.8;
    }
    :active {
      opacity: 0.4;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: 'Dosis', sans-serif;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }
`;
