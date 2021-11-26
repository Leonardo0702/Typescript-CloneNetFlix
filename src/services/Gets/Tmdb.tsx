import { basicFetch } from "./findBasicFetch";

/*type Props = {
  movieId: any;
  type: any;
};*/

type GetMoviesInfoProps = {
  [key: string]: any;
};

export const getMovieInfo = async (
  movieId: any,
  type: any
): Promise<GetMoviesInfoProps> => {
  let info = {};

  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(`/movie/${movieId}?language=pt-BR`);
        break;
      case "tv":
        info = await basicFetch(`/tv/${movieId}?language=pt-BR`);
        break;
      default:
        info = {};
    }
  }

  return info;
};

export const getHomeList = async (): Promise<any[]> => {
  return [
    {
      slug: "originais",
      title: "Originais do Netflix",
      items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`),

      /* O items é um array, 
                  porque a ideia é selecionar uma listagem
                  daquela categoria */
    },
    {
      slug: "trending",
      title: "Recomendados para você",
      items: await basicFetch(`/trending/all/week?language=pt-BR`),
    },
    {
      slug: "toprated",
      title: "Em alta",
      items: await basicFetch(`/movie/top_rated?language=pt-BR`),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR`),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR`),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR`),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR`
      ),
    },
    {
      slug: "documentary",
      title: "Documentários",
      items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR`),
    },
  ];
};
