import React, { useState, useEffect, ReactNode } from "react";

//services
import { getHomeList, getMovieInfo } from "../../services/Gets/Tmdb";
import Loading from "../../services/Loading";

//styles
import { Container, Listas } from "./styles";

//components
import MovieRow from "../MovieRow";
import FeatureMovie from "../FeatureMovie";
import Header from "../Header";
import Footer from "../Footer";

export type Props = {
  children: ReactNode;
};

const ListMovie = ({ children }: Props) => {
  //Estados utilizados
  const [movieList, setMovieList] = useState<any[]>([] as any[]);
  const [featureData, setFeatureData] = useState<any>();
  const [blackHeader, setBlackHeader] = useState(false);

  // Função responsável por pegar a lista de filmes
  const loadAll = async () => {
    const list = await getHomeList();
    setMovieList(list);

    //Função para buscar um filme da lista que detanha a palavra originais
    const originals = list.filter((i) => i.slug === "originais");

    //Função para buscar um filme de forma aleatória apartir da constante anterior, ou seja, dos originais
    const randomChosen = Math.floor(
      Math.random() * (originals[0].items.results.length - 1)
    );

    const chosen = originals[0].items.results[randomChosen];

    console.log(chosen);
    const chosenInfo = await getMovieInfo(chosen.id, "tv");

    setFeatureData(chosenInfo);

    console.log(chosenInfo);
  };

  useEffect(() => {
    loadAll();
  }, []);

  //função responsável por acionar o background do header
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Container>
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}

      <Listas>
        {movieList?.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </Listas>
      <Footer />
      {movieList.length <= 0 && <Loading />}
    </Container>
  );
};

export default ListMovie;
