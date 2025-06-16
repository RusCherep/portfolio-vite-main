import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    
    *, 
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family:"Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }

    html {
        scroll-behavior: smooth; 
    }
    
    section{
        padding: 100px 0;
        
        @media ${theme.media.mobile} {
            padding: 80px 0 ;
        }
    }
    
    

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    a{
        text-decoration: none;
    }

    ul{
        list-style:none;
    }
    
    button{
        background-color: unset;
        border: none;
    }

`