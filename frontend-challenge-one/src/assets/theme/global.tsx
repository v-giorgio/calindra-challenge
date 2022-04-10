import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    
}

#root{
    margin:0 auto;
}

body{
    max-width: 100vw;
    font-family: 'Roboto', sans-serif;
    background-color: #f1f1f1
}

/* SCROLLBAR */
::-webkit-scrollbar {
  background-color: #f80132;
  width: 10px;
}

::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #F1F1F1;
    border-radius: 10px;
}

`;
