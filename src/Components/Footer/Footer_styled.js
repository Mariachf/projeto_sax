import styled from "styled-components";

export const Footer = styled.footer``;
export const Container = styled.div`
  position: relative;
  left: 5%;
  width: 90%;
  height: 45vh;
  border: solid 1px;
  border-top: none;
  display: flex;
`;

export const Logo = styled.div`
  width: 40%;

  img {
    margin-left: 5em;
    margin-top: 3em;
  }

  p {
    width: 60%;
    margin-left: 4em;
    margin-top: 2em;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Menu = styled.div`
  width: 15%;

  ul {
    list-style: none;
    font-weight: bold;
    font-size: 18px;
    margin-top: 2em;
  }

  li {
    margin-top: 1.8em;
  }
`;

export const Botão = styled.div`
  width: 45%;

  h3 {
    margin-top: 2em;
    font-size: 20px;
  }
  input {
    width: 80%;
    height: 5vh;
    background-color: white;
    -webkit-box-shadow: 4px 4px 0px 2px #000000;
    box-shadow: 4px 4px 0px 2px #000000;
    margin-top: 2em;
  }

  button {
    font-weight: bold;
    background-color: #ed4d1b;
    width: 27vh;
    height: 6vh;
    border: 2px solid;
    -webkit-box-shadow: 4px 2px 0px 2px #000000;
    box-shadow: 4px 2px 0px 2px #000000;
    margin-top: 2em;
  }
`;
