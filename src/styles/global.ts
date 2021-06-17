import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }

  body{
    background-color: black;
  }

  h1, h2, h3, h4, h5, h6, strong, small{
    font-weight: 600;
  }

  h1:before{
    display: block;
    content: '';
    width: 30%;
    height: 3px;
    background: var(--red);
    margin-bottom: 1rem;
    margin-right: auto;
  }

  button{
    cursor: pointer;
  }

  :root{
    --red: #BC2722;
    --gray-900: #181b23;
    --gray-700: #353646;
    --gray-500: #616480;
    --gray-300: #9699B0;
    --gray-100:#D1D2DC;
    --white: #ffffff
  }

`
