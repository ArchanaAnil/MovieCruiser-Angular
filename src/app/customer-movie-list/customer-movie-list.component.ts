import { Component, OnInit } from '@angular/core';
import { movie } from '../classes';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-customer-movie-list',
  templateUrl: './customer-movie-list.component.html',
  styleUrls: ['./customer-movie-list.component.css']
})
export class CustomerMovieListComponent implements OnInit {

  movies: movie[];
  //message: Object;
  constructor(private movieService: MovieService) { }

  add(movie) {
    this.movieService.addToFav(movie).subscribe(
      data => {
       console.log(data);
      }
    )
  }

  ngOnInit(): void {
    console.log("inside display");
    this.movieService.getAllCustomerMovies().subscribe(res => {
      this.movies = res;
      console.log(this.movies);
      
    });
  }

}
