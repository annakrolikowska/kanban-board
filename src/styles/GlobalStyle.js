import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
 
const GlobalStyle = createGlobalStyle`

    ${reset}

    :root {
        --color-primary: #E9E7F2;
        --color-secondary: #F8F7F7;
        --color-accent: #7B54CE;
        --color-accent-hover: #9576D8;
        --color-priority-low: #BFFBD3;
        --color-priority-medium: #FFE3AC;
        --color-priority-high: #FFACAC;
        --color-theme-orange: #FCB36E;
        --color-theme-green: #5CB16D;
        --color-theme-blue: #5E8AF1;
        --color-theme-pink: #EF7DCF;  
        --color-white: #fff;
        --color-black: #000;
        --color-grey: #909090;
        --color-light-grey: #B5B5B5;
        --color-error: red;
    
        --font-primary: 'Montserrat', sans-serif;
    }


    body {
        max-width: 1440px;
        margin: 0 auto;
        font-family: var(--font-primary)
    }
`;
 
export default GlobalStyle;