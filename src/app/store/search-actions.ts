import { Action } from '@ngrx/store';
import { Movie } from '../models/movie';

export const ALLMOVIES =     '[Movies] All Movies';
export const SELECTEDMOVIE = '[Movies] Selected Movie';
export const SEARCHTERM =    '[Movies] Search Term';

export class AllMovies implements Action {
  readonly type = ALLMOVIES;

  constructor(public payload: any) {}
}

export class SelectedMovie implements Action {
  readonly type = SELECTEDMOVIE;

  constructor(public payload: Movie[]) {}
}

export class SearchTerm implements Action {
    readonly type = SEARCHTERM;
  
    constructor(public payload: string) {}
  }

export type All = AllMovies | SelectedMovie | SearchTerm;