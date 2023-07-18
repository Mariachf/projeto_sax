import React from "react";
import * as S from "./Footer_styled";
import Logo from "../Assents/logo (1).svg";

export default function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.Logo>
          <img src={Logo} alt="Logo" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </S.Logo>

        <S.Menu>
          <nav>
            <ul>
              <li>Inicio</li>
              <li>Cursos</li>
              <li>Eventos</li>
              <li>Contato</li>
            </ul>
          </nav>
        </S.Menu>
        <S.Botão>
          <h3>Receba materiais gratuitos no seu email</h3>
          <input tipy="text" />
          <button>QUERO RECEBER</button>
        </S.Botão>
      </S.Container>
    </S.Footer>
  );
}
