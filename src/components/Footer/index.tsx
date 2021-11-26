import React from "react";

//Estilos
import { Container, Rodape } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Rodape>
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤.
        </span>{" "}
        Auxiliado pela B7web e Eduardo
        <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site Themoviedb.org
      </Rodape>
    </Container>
  );
};

export default Footer;
