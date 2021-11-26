import React from "react";

//Estilos
import { Container } from "./styles";

//Importação da imagem interna (pasta img)
import Imagem from "../../img/SOLUS.png";

const Loading = () => {
  return (
    <Container>
      <img src={Imagem} alt={"solusflix"} />
    </Container>
  );
};

export default Loading;
