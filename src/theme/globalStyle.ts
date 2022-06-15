import { createGlobalStyle } from 'styled-components';

export const maxWidthBreakpoint = '768px'
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #368389;
    --secondary-color: #fa637e;
  }
  body {
    font-family: 'Mulish', sans-serif;
  }
`;

export default GlobalStyle;
