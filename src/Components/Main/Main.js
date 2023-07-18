import React from "react";
import * as S from "./Main_styled";
import Figura from "../Assents/three-dashes.svg";
import Banda from "../Assents/hero-img (1).svg";

export default function Main() {
  return (
    <S.Main>
      <S.Container>
        <S.Text>
          <img src={Figura} alt="Figura de três traços" />
          <h1>
            Crie algo <span class="textoColorido">impactante</span> com música
          </h1>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>COMECE AGORA</button>
        </S.Text>
        <S.Imagem>
          <img src={Banda} alt="Banda" />
        </S.Imagem>
      </S.Container>
    </S.Main>
  );
}
