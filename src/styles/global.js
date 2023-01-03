import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
             
    --color-primary: #00C894;
    --color-primary-focus: #00804B;
    --color-primary-error: #00684d;
    
    --black: #121214;
    --gray-0: #212529;
    --gray-1: #868E96;
    --gray-2: #DEE2E6;
    --gray-3: #F8F9FA;
    --gray-4: #d9d9d9
    
    --white: #FFFFFF;
    --sucess: #82C91E;
    --error: #F03E3E;
    --warning: #FCC419;
    
    --font-primary: 'Roboto', sans-serif;
    --font-secundary: 'Inter', sans-serif;

    }
    
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--font-secundary);
    text-decoration: none;
    list-style: none;
    }

    body,html{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    }
`;
