import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

    body {
    font-size: 16px;
    color: var(--dark);
    }
  html {
    font-size: 16px;
  }

  body, input, select, textarea {
      font-size: 1rem;
    color: var(--dark);
  }
  .PoopinsFont { 
    font-family: 'Poppins', sans-serif;
  }
  .SoraFonts {
    font-family: 'Sora', sans-serif;
  }

`
