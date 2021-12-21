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
        //margin-top: -50px;
        margin-bottom: 140px;
    }
    
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    #imgArrow {
        margin-top: -40px;
    }
`

export const Text = styled.div`
    font-size: 42px;
    font-family: 'Arvo', serif;
    font-weight: 400;
    color: #FFFFFF; 

    span {
        color: #0000FF;
    }
`;

export const TextUpper = styled.div`
    font-size: 52px;
    font-family: 'Rye', cursive;
    font-weight: 400;
    color: #FFFFFF; 
`
export const ButtonFake = styled.div`
    background: #0000FF;
    padding: 1.8rem;
    border-radius: 25px;
    width: 70%;

    

    span {
        font-family: 'Arvo', serif;
        font-weight: 400;
        text-decoration: none;
        font-size: 22px;
        color: #FFFFFF;
    }
`;