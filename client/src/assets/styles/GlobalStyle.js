import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { color, fonts } from './constants';

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

  
  *::-webkit-scrollbar {
    width: 6px;
  }
 
  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 3px;

  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${color.grey};
    border-radius: 3px;
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
