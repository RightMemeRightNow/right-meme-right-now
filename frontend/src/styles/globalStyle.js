import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body, #__next {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: pretendard, 'Ubuntu', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  * {
    font-family: pretendard, 'Ubuntu', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
