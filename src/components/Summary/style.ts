import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    width: 70%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #texts {
        margin-bottom: 2rem;
    }
    
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #imgArrow {
        margin-top: -30px;
    }
`

export const Text = styled.div`
    font-size: 42px;
    font-family: 'Arvo', serif;
    font-weight: 400;
    color: #FFFFFF; 

    span {
        color: #87cefa;
    }
`;

export const TextUpper = styled.div`
    font-size: 52px;
    font-family: 'Rye', cursive;
    font-weight: 400;
    color: #FFFFFF; 
`
export const ButtonFake = styled.div`
    background: #87cefa;
    padding: 1rem;
    border-radius: 25px;
    width: 70%;
    text-align: center;

    span {
        font-family: 'Arvo', serif;
        font-weight: 400;
        text-decoration: none;
        font-size: 1.2rem;
        color: #0000FF;
    }
`;