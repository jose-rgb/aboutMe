import styled from "styled-components";

export const Container = styled.div`
   
    h1 {
        margin: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Arvo', serif;
        font-weight: 400;
        color: #6ac576;
        text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;

    }


`
export const Text = styled.div`
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #b7e7bd;
    font-family: 'Varela Round', sans-serif;
    font-weight: 400;
    font-size: 24px;
    text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;

    p {
        width: 70%;
    }
`
