import { Component, OnInit } from '@angular/core';
import { movie } from '../classes';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: movie[];
  
  constructor(private movieService: MovieService) { }

  

  ngOnInit(): void {
    console.log("inside display");
    this.movieService.getAllMovies().subscribe(res => {
      this.movies = res;
      console.log(this.movies);
      
    });
  }

}
