import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ErrorHandlerService } from "./error-handler/error-handler.service";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MoviesService {
  url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=ccd98982d0fb00b4279bbade85bcdd29&language=en-US&page=1';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getMovies() {
    return this.http.get(this.url)
      .map(res => res['results'])
      .catch(error => Observable.throw(this.errorHandler.handleHttpError(error)))
  }
}
