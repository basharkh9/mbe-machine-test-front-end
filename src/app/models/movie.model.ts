import { IGenre } from './genre.model';

export interface IMovie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: IGenre[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}
