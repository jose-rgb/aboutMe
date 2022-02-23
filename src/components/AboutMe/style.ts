import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    user-select: none;

    h2 {
        font-size: 32px;
        font-family: 'Arvo', serif;
        font-weight: 400;
        color: #FFFFFF; 
    }


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
            font-family: 'Arvo', serif;
            font-weight: 400;
            color: #fff3f3; 
        }
    }
`
export const Text = styled.div`
    margin-top: 20px;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFFFFF;
    font-family: 'Arvo', serif;
    font-weight: 400;
    font-size: 24px; 
    text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;

    p {
        width: 70%;
    }
    
`