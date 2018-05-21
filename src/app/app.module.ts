import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from "./store/reducers";
 
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchBarComponent } from "./navbar/search-bar/search-bar.component";
import { MoviesService } from "./movies.service";
import { ErrorHandlerService } from "./error-handler/error-handler.service";
import { MoviesDetailsComponent } from './movies-details/movies-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    MoviesListComponent,
    MoviesDetailsComponent
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
