import styled from "styled-components";

export const Container = styled.div`
    margin-top: 12rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-family: 'Arvo', serif;
        font-weight: 400;
        color: #6ac576;
        transition: box-shadow 0.2s;
        text-shadow: -1px 0 black, 0 1px black,
      1px 0 black, 0 -1px black;

    }
`

export const Techs = styled.div`
  margin-top: 2rem;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`

export const CardTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 26vw;
  height: 12vh;
  margin: 20px;
  background: #3e3757;
  border-radius: 10px;
  box-shadow: 0;
  transition: 1s;

  &:hover {
    box-shadow: 0px 0px 15px #4ac25a, 0px 0px 5px #4ac25a;
    position: relative;
    bottom: 2px;
  }

  img {
    width: 40%;
    height: 100%;
    border-radius: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Varela Round', sans-serif;
    color: #b7e7bd;
  }

  @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        width: 66vw;
        height: 8vh;
    }
`
