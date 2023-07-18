import styled from "styled-components";

export const Header = styled.header``;
export const Container = styled.div`
  position: relative;
  left: 5%;
  width: 90%;
  height: 15vh;
  border: solid 1px;
  display: flex;
  gap: 35vh;
  justify-content: center;
`;

export const Logo = styled.div`
  img {
    width: 90px;
    position: relative;
    right: 9vh;
    top: 1.5em;
  }
`;

export const Menu = styled.p`
  display: flex;
  font-size: 20px;
  gap: 3vh;
  font-weight: bold;
  margin-top: 1.5em;
`;

export const Botão = styled.button`
  width: 100px;
  height: 10px;
  border: none;
  margin-top: 1.5em;
  button {
    font-weight: bold;
    background-color: #ed4d1b;
    width: 25vh;
    height: 6vh;
    border: 2px solid;
    -webkit-box-shadow: 4px 4px 0px 2px #000000;
    box-shadow: 4px 4px 0px 2px #000000;
  }
`;
