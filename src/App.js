import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
    
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    background-color:#FFE7D1;
  }

  button {
    cursor: pointer;
  }

`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Cards />
      <Footer />
    </>
  );
}
