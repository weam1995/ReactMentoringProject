import "./types";

export interface MovieProps {
  title: string;
  releaseDate: Date;
  movieURL: string;
  rating: number;
  genre: Genre[];
  runtime: number;
  overview: string;
}
