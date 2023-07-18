import React from "react";
import * as S from "./Cards_styled";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Piano from "../Assents/piano.png";
import Musical from "../Assents/musica.png";
import Sax from "../Assents/sax.png";
import Bateria from "../Assents/bateria.png";

export default function Main() {
  return (
    <S.Main>
      <S.Cards>
        <S.Cards1>
          <S.Piano>
            <img src={Piano} alt="piano" />
            <h3>Piano popular</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              magna aliqua.{" "}
            </p>
            <HiOutlineArrowSmRight size={40} className="iconeStyle" />
          </S.Piano>

          <S.Musical>
            <img src={Musical} alt="piano" />
            <h3>Teoria musical</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              magna aliqua.{" "}
            </p>
            <HiOutlineArrowSmRight size={40} className="iconeStyle" />
          </S.Musical>

          <S.Sax>
            <img src={Sax} alt="piano" />
            <h3>Sax alto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              magna aliqua.{" "}
            </p>
            <HiOutlineArrowSmRight size={40} className="iconeStyle" />
          </S.Sax>

          <S.Bateria>
            <img src={Bateria} alt="piano" />
            <h3>Bateria</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              magna aliqua.{" "}
            </p>
            <HiOutlineArrowSmRight size={40} className="iconeStyle" />
          </S.Bateria>
        </S.Cards1>
        <h2>
          {" "}
          E <span class="textoColorido">vários</span> outros!{" "}
        </h2>
        <button>CONHECER CURSOS</button>
      </S.Cards>
    </S.Main>
  );
}
