import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import "@fontsource/montserrat"

 
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
    ${reset}

    body {
        max-width: 1440px;
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
    }
`;
 
export default GlobalStyle;