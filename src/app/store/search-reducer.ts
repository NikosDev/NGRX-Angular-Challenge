import { Movie } from '../models/movie';
import * as SearchActions from './search-actions';

export interface State {
  searchTerm: string;
  allMovies: any,
  selectedMovie: Movie[]
}

const initialState: State = {
  searchTerm: '',
  allMovies: [],
  selectedMovie: []
};

export function reducer(state = initialState, action: SearchActions.All): State {
  switch(action.type) {
    case SearchActions.ALLMOVIES: {
      return {
        ...state,
        allMovies: action.payload
      };
    }

    case SearchActions.SELECTEDMOVIE: {
      return {
        ...state,
        selectedMovie: action.payload
      };
    }

    case SearchActions.SEARCHTERM: {
        return {
          ...state,
          searchTerm: action.payload
        };
      }

    default: {
      return state;
    }
  }
}