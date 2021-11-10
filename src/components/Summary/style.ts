import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    
    
    @keyframes blinkCursor {
        from{
            border-right-color: #b7e7bd;
        }
        to {
            border-right-color: transparente;
        }
    }

    
`

export const Paragraph= styled.p`
    max-width: 780px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.6em;
    color: #b7e7bd;
    border-right: 3px solid #b7e7bd;
    animation: blinkCursor 700ms infinite normal, typyng 5s steps(40) 0s normal both;
    white-space: nowrap;
    overflow: hidden;
    padding: 8px;
    
    @keyframes blinkCursor {
        from{
            border-right-color: #b7e7bd;
        }
        to {
            border-right-color: transparent;
        }
    }

    @keyframes typyng {
        from{
            width: 0;
        }
        to {
            width: 16em;
        }
    }
`

export const Terminal = styled.div`
    margin-top: 1.4rem;
    background: #14111d;
    width: 70%;
    height: 6rem;
    border-radius: 8px;

    header {
        width: 100%;
        height: 2.2rem;
        background: #292828;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 4px;

        div {
            background: red;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin: 3px;
        }

        .yellow {
            background: #d1d131;
        }
        .green {
            background: #53d832;
        }

    }

    
`
