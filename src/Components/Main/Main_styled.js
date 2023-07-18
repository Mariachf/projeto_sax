import styled from "styled-components";

export const Main = styled.main``;

export const Container = styled.div`
  border: 1px solid;
  border-top: none;
  position: relative;
  left: 5%;
  width: 90%;
  height: 100vh;
  display: flex;
`;

export const Text = styled.div`
  width: 50%;
  height: 80vh;
  margin-left: 1.2em;
  .textoColorido {
    color: #ed4d1b;
  }

  h1 {
    font-size: 50px;
    width: 70%;
    margin-left: 1.2em;
    margin-bottom: 0.2em;
  }

  p {
    width: 80%;
    font-size: 20px;
    font-weight: bold;

    margin-left: 3em;
    margin-bottom: 1em;
  }

  img {
    position: relative;
    left: 23em;
    top: 7em;
  }

  button {
    font-weight: bold;
    background-color: #ed4d1b;
    width: 25vh;
    height: 6vh;
    border: 1.5px solid;
    margin-left: 4.2em;
    -webkit-box-shadow: 4px 4px 0px 2px #000000;
    box-shadow: 4px 4px 0px 2px #000000;
  }
`;

export const Imagem = styled.div`
  width: 90%;

  img {
    width: 100%;
    height: 70vh;
    position: relative;
    left: 3.3em;
    bottom: 1em;
  }
`;
