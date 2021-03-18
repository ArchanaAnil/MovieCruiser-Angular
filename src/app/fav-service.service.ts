import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavServiceService {
  
  getFavoritesList(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/favorites',
    {
      headers: new HttpHeaders()
       .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiaWF0IjoxNjE1OTEzNzk4LCJleHAiOjE2MTU5MTQ5OTh9.S-SyN5bJWUXsWQsieiSUfXfxJrc9hCx1meANVWOh7os")
     
    }).pipe();
  }


  deleteFavorite(id){
    //const url = 'http://localhost:8080/fav-delete/' + id;
    return this.http.delete(`http://localhost:8080/fav-delete/${id}`,{
      headers: new HttpHeaders()
       .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIiwiaWF0IjoxNjE1OTEzNzk4LCJleHAiOjE2MTU5MTQ5OTh9.S-SyN5bJWUXsWQsieiSUfXfxJrc9hCx1meANVWOh7os")
     
    }).pipe();
  }

  constructor(private http: HttpClient) { }
}
