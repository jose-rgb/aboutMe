import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6rem;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 26px;
    font-family: 'Arvo', serif;
    font-weight: 400;
    color: #FFFFFF; 

    #logo {
        font-size: 34px;
    }

    a {
        text-decoration: none;
        color: #FFFFFF; 
        border-bottom: none;
        //transition: 1s;
    }

    a:hover {
        border-bottom: 2.7px solid #0000FF
    }

    div {
        a {
            margin: 16px;
        }
    }
`
