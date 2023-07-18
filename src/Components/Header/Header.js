import React from "react";
import * as S from "./Header_styled";
import Logo from "../Assents/logo (1).svg";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <img src={Logo} alt="Logo do site" />
        </S.Logo>
        <S.Menu>
          <p>Inicio</p>
          <p>Curso</p>
          <p>Eventos</p>
          <p>Contatos</p>
        </S.Menu>

        <S.Botão>
          <button>SE INSCREVA</button>
        </S.Botão>
      </S.Container>
    </S.Header>
  );
}
