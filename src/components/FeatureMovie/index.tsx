//Estilos
import {
  Container,
  FeatureVertical,
  FeatureHorizontal,
  FeatureTitle,
  FeatureInfo,
  FeaturePoints,
  FeatureYear,
  FeatureSeasons,
  FeatureDescription,
  FeatureButtons,
  FeatureGeneros,
} from "./styles";

export interface Props {
  item?: any;
}

const FeatureMovie = ({ item }: Props) => {
  //Função para buscar a data
  const firstDate = new Date(item.first_air_date);
  //Função para acionar o genêro
  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  //Função para limitar os caracteres da descrição
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <Container
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeatureVertical>
        <FeatureHorizontal>
          <FeatureTitle>{item.original_name}</FeatureTitle>
          <FeatureInfo>
            <FeaturePoints>{item.vote_average} pontos</FeaturePoints>
            <FeatureYear>{firstDate.getFullYear()}</FeatureYear>
            <FeatureSeasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </FeatureSeasons>
          </FeatureInfo>
          <FeatureDescription>{description}</FeatureDescription>
          <FeatureButtons>
            <a href={`/watch/${item.id}`}>▶ Assistir</a>
            <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </FeatureButtons>
          <FeatureGeneros>
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </FeatureGeneros>
        </FeatureHorizontal>
      </FeatureVertical>
    </Container>
  );
};

export default FeatureMovie;
