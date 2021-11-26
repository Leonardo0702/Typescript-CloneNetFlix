import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 0 0 0 30px;
`;

export const MovieArrowLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;

  //Foi aplicado o !importante, pois se trata de um componente externo (material ui)
  // Queremos que os icones de next e before sejam exibidos somente com o hover ativo
  ${Container}:hover & {
    opacity: 1 !important;
  }

  //Responsividade
  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const MovieArrowRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;

  //Foi aplicado o !importante, pois se trata de um componente externo (material ui)
  // Queremos que os icones de next e before sejam exibidos somente com o hover ativo
  ${Container}:hover & {
    opacity: 1 !important;
  }

  //Responsividade
  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const MovieArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const Row = styled.div<any>`
  //width: 9999999px;
  transition: all ease 0.5;
`;

export const Images = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`;
