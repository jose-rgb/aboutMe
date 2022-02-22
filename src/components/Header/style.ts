import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6rem;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    font-size: 24px;
    font-family: 'Arvo', serif;
    font-weight: 400;
    color: #fff3f3; 

    #logo {
        font-size: 34px;
    }

    a {
        text-decoration: none;
        color: #a09b9b; 
        border-bottom: none;
        transition: .3s;
    }

    a:hover {
        border-bottom: 2.7px solid #87cefa;
        color: #FFFFFF; 
    }

    div {
        a {
            margin: 16px;
        }
    }
`
