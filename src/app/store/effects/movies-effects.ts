import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { MoviesService } from '../../movies.service';
import * as SearchActions from '../search-actions';

@Injectable()
export class MoviesEffects {
    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) {}
      
    @Effect()
    moviesList$: Observable<Action> = this.actions$.ofType(SearchActions.ALLMOVIES)
        .switchMap(() =>
        this.moviesService.getMovies()
            .map(data => data)
    );
            
    
    /* .switchMap(movies => {
            console.log(movies)
            return this.moviesService.getMovies()
        })
    .map(results => new SearchActions.AllMovies());
     */
}