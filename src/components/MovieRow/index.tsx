import React, { useState } from "react";

//Estilos
import {
  Container,
  Title,
  MovieArrowLeft,
  MovieArrowRight,
  MovieArea,
  Row,
  Images,
} from "./styles";

//Icones retirados do material ui, foi necessário alterar as pastas de busca para @material-ui
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export interface Props {
  title?: string;
  items?: any;
}

const MovieRow: React.FC<Props> = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  //Função para mover a MovieRow para a esquerda
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  //Função para mover a MovieRow para a direita
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <MovieArrowLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </MovieArrowLeft>
      <MovieArrowRight onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </MovieArrowRight>

      <MovieArea>
        {/*A função criada no Row diz que os resultados trazidos no Row devem ser maiores que 0
        e deter um array com os paramêtros item e key, deste modo teremos o retorno da imagem */}
        <Row style={{ marginLeft: scrollX, width: items.results.length * 150 }}>
          {items.results.length > 0 &&
            items.results?.map((item: any, key: number) => (
              <Images key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={"movie"}
                />
              </Images>
            ))}
        </Row>
      </MovieArea>
    </Container>
  );
};

export default MovieRow;
