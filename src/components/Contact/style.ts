import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        h2 {
            font-size: 32px;
            font-family: 'Arvo', serif;
            font-weight: 400;
            color: #fff3f3; 
        }

        img {
            margin-left: 10px;
            width: 40px;
            height: 40px;
        }
    }
`

export const Content = styled.div`
    height: 520px;
    width: 935px;
    border-radius: 15px;
    background: #F0F2F5;

    div {
        height: 100%;
        width: 30%;
        background: #6cb4df;
        margin-top: 20px;
        border-radius: 5px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        color: #fff;
        font-family: 'Arvo', serif;
        font-weight: 400;
        font-size: 1.4rem;

        header {
            position: relative;
            top: -60px;
            font-weight: 800;
        }

        a { 
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;

            img {
                width: 40px;
                height: 40px;
            }

            h5 {
                margin-left: 10px;
                font-size: 1.4rem;
            }
        }
    }

    div ~ div {
        width: 70%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .box-input-name {
            width: 500px;
            background: #fff;
            padding: 30px;
        }

        .input-data {
            width: 100%;
            height: 40px;
            background: aqua;
            display: block;
        }

        .input-data input {
            width: 100%;
            
        }

        .input-data input {
            width: 100%;
            height: 100%;
            border: 0;
            font-size: 17px;
            border-bottom: 2px solid gray;
            outline: 0;
            box-shadow: 0 0 0 0;
        }

        .input-data label {
            position: absolute;
            bottom: 10px;
            margin-bottom: 4PX;
            left: 0;
            font-size: 20px;
            color: black;
            transition: .3s;
        }

        //mudando label quando input:focus
        .input-data input:focus ~label {
            bottom: 20px;
            font-size: 18px;
            color: #0000FF;
        }

        .input-data .line {
            position: absolute;
            width: 100%;
            height: 2px;
            background: gray;
            top: 18px;
        }

         //mudando .line quando input:focus
        .input-data input:focus ~ .line{
            background: #0000FF;
        }

    }

`