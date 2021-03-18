import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../classes';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  public movie: movie={  movie_id: null, title: "", box_office:null, active :"" ,dateOfLaunch:null, genre:"", hasTeaser:""};

  constructor(private movieService: MovieService, private route: ActivatedRoute)  { }


edit(movie) {
    this.movieService.editMovie(movie).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('movie_id');
    this.movieService.getMovieById(parseInt(id)).subscribe(
      data => {
        //this.movie = data;
        console.log(data);
        
      }
    )
  }


}
