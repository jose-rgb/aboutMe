import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60vh;
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
    border: 2px solid #c8ccd6;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    /*esconder as divs do carrousel*/
    overflow: hidden;
   

`
 export const Slides = styled.div`
    display: flex;
    /*500% = 5 itens do corousel */
    width: 300%;
    height: 100%;
   

    input {
        display: none;
    }

    /*mover itens */
    .s1 {
        margin-left: 70%;
    }

    #slide2:checked ~ .s1 {
        margin-left: 2%;
    }

    #slide3:checked ~ .s1 {
        margin-left: -65%;
    }
 
 `
 export const SlideItem = styled.div`
 /*cada item ocupando 100%, pois 500/5 ites 20% pra cada */
    width: 33%;
    margin: 0 1rem 0;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: space-evenly;
    transition: .6s;

 .descritionText {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
 }

 .descritionText .title {
     font-size: 1.6rem;
     font-weight: bold;
 }

 .descritionText .descrition {
     width: 80%;
     margin-top: 2rem;
     font-size: 1.4rem;
     text-align: left;
     margin: 1rem;
 }

`

export const Navigation = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .selected {
        background: #fff;
    }

    label {
        width: 14px;
        height: 14px;
        border: 2px solid #fff;
        border-radius: 50%;
        margin: 0 .2rem 0;
        cursor: pointer;
        transition: .6s;
    }

`




