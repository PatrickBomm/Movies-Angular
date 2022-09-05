import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './movieItem/movie-item.component';
import { MoviesContainerComponent } from './moviesContainer/movies-container.component';
import { SearhBarComponent } from './searhBar/searh-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { MovieDetailsComponent } from './movieDetails/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MoviesContainerComponent,
    SearhBarComponent,
    HomeComponent,
    FilterComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
