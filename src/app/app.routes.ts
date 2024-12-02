import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailedComponent } from './detailed/detailed.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent, title:"home"},
    {path:"series", component:SeriesComponent, title:"series"},
    {path:"movies", component:MoviesComponent, title:"movies"},
    {path:"favorites", component:FavoritesComponent, title:"favorites"},
    {path:"detailed/:category/:id", component:DetailedComponent, title:"details"},
    {path:"**", component:NotFoundComponent, title:"not-found"}

];
