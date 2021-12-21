import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        img {
            margin-left: 10px;
            width: 40px;
            height: 40px;
        }

        h2 {
            font-family: 'Rye', cursive;
            font-weight: 400;
            color: #cac5c5; 
            font-size: 32px;
        }
    }
`