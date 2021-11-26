import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: transparent;
  transition: all ease 0.5;
`;

//Aqui é necessário tipar para que possamos utilizar a condição na aplicação
interface CabecalhoProps {
  black: boolean;
}

//Indicamos ao Cabecalho que usaremos o CabecalhoProps
export const Cabecalho = styled.header<CabecalhoProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: ${(props) => (props.black ? "black" : "transparent")};
`;

export const LogoImg = styled.div`
  height: 30px;

  img {
    height: 100%;
  }
`;

export const LogoUser = styled.div`
  height: 30px;

  img {
    height: 100%;
    border-radius: 5px;
  }
`;

export const Links = styled.a``;
