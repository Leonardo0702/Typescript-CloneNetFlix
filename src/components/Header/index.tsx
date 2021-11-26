import React from "react";

//Estilos
import { Container, Cabecalho, LogoImg, Links, LogoUser } from "./styles";

//Importação de imagens internas(pasta img)
import Imagem from "../../img/SOLUS.png";
import Imagens from "../../img/solinho.png";

export interface headerProps {
  black: boolean;
}

const Header = ({ black }: headerProps) => {
  return (
    <Container>
      <Cabecalho black={black}>
        <LogoImg>
          <Links>
            <img src={Imagem} alt={"solusflix"} />
          </Links>
        </LogoImg>
        <LogoUser>
          <Links>
            <img src={Imagens} alt={"user"} />
          </Links>
        </LogoUser>
      </Cabecalho>
    </Container>
  );
};

export default Header;
