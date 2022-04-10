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
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #E9E9E9;
}

/* SCROLLBAR */
::-webkit-scrollbar {
  background-color: #E0E0E0;
  width: 15px;
}

::-webkit-scrollbar-thumb {
    width: 15px;
    background-color: #716565;
    border-radius: 10px;
}
`;
