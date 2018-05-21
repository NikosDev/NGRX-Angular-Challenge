import * as fromSearch from './search-reducer';

export interface State {
  search: fromSearch.State;
}

export const reducers = {
  search: fromSearch.reducer
};

export function allMovies(state: State) {
  return state.search.allMovies;
}

export function selectedMovie(state: State) {
  return state.search.selectedMovie;
}

export function searchTerms(state: State) {
  return state.search.searchTerm;
}