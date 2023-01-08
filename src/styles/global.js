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



    --white:#ffffff;
    
    
    
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

    

    body,html{
        width: 100vw;
        height: 100vh;
        overflow-x: none;
    }

    a {
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
    }


    .sectionTitle {
        font-family: var(--font-secundary);
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 500;
        color: var(--brown);
        margin-bottom: 30px;

        @media (max-width: 405px) {
            font-size: 2.9rem;
        }
    }

    .sectionSubTitle {
        text-transform: uppercase;
		font-weight: 400;
        font-size: 1rem;
        color: var(--nude-1);

        @media (max-width: 405px) {
            font-size: 0.9rem;
        }
    }

    .proceduresTitle {
        font-family: var(--font-secundary);
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 500;
        color: var(--white);
    }

    .proceduresDescription {
        font-weight: 400;
        font-size: 1.5rem;
        text-align: start;
        color: var(--white);
    }

    .testimonialsName {
        font-family: var(--font-secundary);
        color: var(--marrom);
		text-transform: uppercase;
		font-weight: 600;
		font-size: 1.5rem;
    }

    .testimonialsText {
        margin-top: 1rem;
        max-width: 400px;
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
        color: var(--gray-6);


        @media (max-width: 470px) {
            font-size: 1.125rem;
        }
    }

    
`;
