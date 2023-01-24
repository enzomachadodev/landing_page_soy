import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
             
    --bege-0: #EFE8E0;
    --bege-1: #C09E85;
    --bege-2: #A2795B;
    --bege-3: #B28475;

    --nude-0: #edede9;
    --nude-1: #d6ccc2;
    --nude-2: #f5ebe0;
    --nude-3: #e3d5ca;
    --nude-4: #d5bdaf;

    --yellow: #b08401;
    --pink: #d49e8d;
    --sand:#ded1bd;
    --off-white:#faf6f2;
    --brown: #4b3d34;
    --brown-2: #543738;
    --dark-brown: #271f1b;

    --gold: #F2D680;



    --white:#FAFAFA;
    
    
    
    --gray-0: #F8F9FA;
    --gray-1: #e5e5e5;
    --gray-2: #d9d9d9;
    --gray-3: #bfc0c0;
    --gray-4: #a5a5a5;
    --gray-5: #7f7f7f;
    --gray-6: #595959;
    
    --black: #0D0D0D;

    
    --font-primary: 'Montserrat', sans-serif;
    --font-secundary: 'Oswald', sans-serif;


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

    
    body {
        overflow-x: hidden;
    }

    body,html{
        width: 100vw;
        height: 100vh;
    }

    a {
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
    }
    
    .sectionTitleBox {
        border-bottom: 2px solid var(--pink);
        margin-bottom: 30px;
        padding-left: 1rem;

        h2 {
            font-family: var(--font-secundary);
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 500;
        color: var(--brown);
        margin-bottom: 10px;

        @media (max-width: 465px) {
            font-size: 2.9rem;
        }
        }

        span {
            text-transform: uppercase;
		font-weight: 400;
        font-size: 1rem;
        color: var(--nude-1);

        @media (max-width: 405px) {
            font-size: 0.9rem;
        }
    }
}

    .sectionText {
        margin: 0 auto;
        text-align: center;
        font-size: 1.2rem;
        color: var(--brown);
        max-width: 400px;
    }

    .queryBtn {
        margin: 20px auto;
        background-color: var(--pink);
        text-transform: uppercase;
        border: 2px solid var(--pink);
        padding: 15px;
        color: var(--off-white);
        transition: .5s;
        border-radius: 8px;

        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


    }

    .queryBtn:hover {
        background-color: transparent;
        color: var(--pink);
        box-shadow: unset;
    }

    

    
`;
