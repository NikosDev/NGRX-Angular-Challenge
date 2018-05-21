import { Component } from '@angular/core';
import { Movie } from "../models/movie";

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../store/reducers';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent {
  movie: Observable<Movie[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.movie = store.select(fromRoot.selectedMovie);
   }

}
