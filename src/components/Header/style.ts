import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
        margin-top: 6rem;
        font-family: 'Arvo', serif;
        font-weight: 400;
        color: #6ac576;
        transition: box-shadow 0.2s;
        text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;

    }


    img {
        margin-top: 4rem;
        width: 230px;
        height: 230px;
        border-radius: 50%;
        border: 4px solid #6ac576;
        transition: box-shadow 0.2s;
        box-shadow: 0px 0px 15px #4ac25a, 0px 0px 5px #4ac25a;
    }

    @keyframes neon {
        from {
            filter: drop-shadow(0 0 0 #6ac576);
        }
        to {
            filter: drop-shadow(0 0 35px #4ac25a);
        }
    }

    img {
        animation: neon 3s alternate infinite ease-in-out;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        justify-content: center;
        h1 {
            display: none;
           
        }
    }
`
