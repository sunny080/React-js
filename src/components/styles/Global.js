import {createGlobalStyle}from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

*{
    box-sizing:border-box;
}
body{
    background-color: rgba(0, 0, 0, 0.9);

    font-family:'Poppins', sans-serif;
    margin:0;
}

img{
    max-width:100%;
}

`




export default GlobalStyles