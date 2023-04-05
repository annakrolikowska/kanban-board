import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
 
const GlobalStyle = createGlobalStyle`

    ${reset}

    body {
        max-width: 1440px;
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
    }
`;
 
export default GlobalStyle;