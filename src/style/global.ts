//global styles
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //responsiveness in sources
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;  //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%;  //14px
        }
    }
    body {
        width: 100vw;
        height: 100vh;
        background: #312A47;
        //dating fonts
        -webkit-font-smoothing: antialiased;
    }
    
`