import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMovieListComponent } from './customer-movie-list/customer-movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { path:'home', component:MovieListComponent},
  { path:'favorites', component:FavoritesComponent},
  { path:'customer', component:CustomerMovieListComponent},
  { path:'edit/:id', component:EditMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
