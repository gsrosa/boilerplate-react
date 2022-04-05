import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }
`
