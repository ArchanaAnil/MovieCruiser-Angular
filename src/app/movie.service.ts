import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movie } from './classes';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  getMovieById(id) {
    const url = 'http://localhost:8080/edit/' + id
    return this.http.get(url);

  }
  editMovie(movie) {
    const url = 'http://localhost:8080/edit-success';
    return this.http.put(url, movie, {responseType: 'text' as 'json'})

  }
  addToFav(movie) {
    //const url = 'http://localhost:8080/addToFav';
    return this.http.post<any>(`http://localhost:8080/newFavorite/${movie}`, 
    {
      headers: new HttpHeaders()
       .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiaWF0IjoxNjE1OTEzNzk4LCJleHAiOjE2MTU5MTQ5OTh9.S-SyN5bJWUXsWQsieiSUfXfxJrc9hCx1meANVWOh7os")
     
    }).pipe();

  }
  

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any>
  {
    console.log("inside getAllMovies");
    return this.http.get<any>('http://localhost:8080/home',
    {
      headers: new HttpHeaders()
       .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiaWF0IjoxNjE1OTEzNzk4LCJleHAiOjE2MTU5MTQ5OTh9.S-SyN5bJWUXsWQsieiSUfXfxJrc9hCx1meANVWOh7os")
     
    }).pipe();
    
  }

  getAllCustomerMovies(): Observable<any>
  {
    console.log("inside getAllMovies");
    return this.http.get<any>('http://localhost:8080/customer',
    {
      headers: new HttpHeaders()
       .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiaWF0IjoxNjE1OTEzNzk4LCJleHAiOjE2MTU5MTQ5OTh9.S-SyN5bJWUXsWQsieiSUfXfxJrc9hCx1meANVWOh7os")
     
    }).pipe();
    
  }

}
