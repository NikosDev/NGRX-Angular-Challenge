import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie";

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MoviesService } from "../movies.service";

import * as SearchActions from '../store/search-actions';
import * as fromRoot from '../store/reducers';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(
    private store: Store<fromRoot.State>, 
    private moviesService: MoviesService
  ) {
    this.movies = store.select(fromRoot.allMovies);
  }

  ngOnInit() {
    this.showMovies();
  }

  showMovies(){
    this.moviesService.getMovies()
    .subscribe(results => this.store.dispatch(new SearchActions.AllMovies(results)));
  }
}
