import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
             
    --bege-0: #EFE8E0;
    --bege-1: #C09E85;
    --bege-2: #A2795B;
    --bege-3: #B28475;

    --gold: #F2D680;
    
    --white: #FFFFFF;
    
    --gray-0: #F8F9FA;
    --gray-1: #F2F2F2;
    --gray-2: #d9d9d9;
    --gray-3: #868E96;
    --gray-4: #212529;
    
    --black: #0D0D0D;

    
    --font-primary: 'Roboto', sans-serif;


    }
    
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--font-primary);
    text-decoration: none;
    list-style: none;
    color: black;

    }

    body,html{
    width: 100vw;
    height: 100vh;
    }
`;
