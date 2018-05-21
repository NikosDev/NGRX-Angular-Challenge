import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from "./store/reducers";
import { MoviesEffects } from "./store/effects/movies-effects";
 
import { AppComponent } from './app.component';
import { MoviesService } from "./movies.service";
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ErrorHandlerService } from "./error-handler/error-handler.service";


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [MoviesService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
