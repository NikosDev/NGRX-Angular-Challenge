import { Component} from '@angular/core';
import { Movie } from "../../models/movie";

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import * as SearchActions from '../../store/search-actions';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  movies: Observable<Movie[]>;
  movie: Observable<Movie[]>;
  term: Observable<string>;

  constructor(private store: Store<fromRoot.State>) { 
    this.movies = store.select(fromRoot.allMovies);
    this.movie = store.select(fromRoot.selectedMovie);
  }

  searchKey(term: string){
    this.store.dispatch(new SearchActions.SearchTerm(term));

    let filteredMovie =this.movies.map(res => res.find( movie => movie.title.toLowerCase().includes( term.toLowerCase() ) ))
    filteredMovie.subscribe(res => this.store.dispatch(new SearchActions.SelectedMovie([res])))
  }
}
