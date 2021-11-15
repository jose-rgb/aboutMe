import styled from "styled-components";

export const Container = styled.div`
    margin-top: 9.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 2rem;
        font-family: 'Heebo', sans-serif;
        font-weight: 400;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .animationDev {
             display: none;
        }
    }
    
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 8rem;
    color: #6ac576;
    font-family: 'Varela Round', sans-serif;
    font-weight: 400;
    text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;
    

    h1 {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        margin-left: 0;
    }
`

export const Redes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;

    a {
        margin: 1rem;
    }

    a:hover {
        position: relative;
        cursor: pointer;
        bottom: 6px;
    }

    img {
        height: 82px;
        width: 80px;
        border-radius: 30%;
    }
`

