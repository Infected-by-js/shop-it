import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { fonts } from './constants';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: ${fonts.inter};
  }

  *,*::after,*::before{
    box-sizing: border-box;
  }

  

  body {
    min-width: 350px;
    
  }

#root {
  
}

  ul, ol, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 1px solid transparent;
    cursor: pointer;
  }



    
`;
