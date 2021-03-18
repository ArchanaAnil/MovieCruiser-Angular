import { Component, OnInit } from '@angular/core';
import { Favorites, movie } from '../classes';
import { FavServiceService } from '../fav-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorites;

  constructor(private favService: FavServiceService) { }

  delete(id: number) 
  {
    console.log(id);
    this.favService.deleteFavorite(id).subscribe(
      data => {
        this.ngOnInit();
        console.log(data);
      }
    )
  }

  onInIt() {
    this.favService.getFavoritesList().subscribe(
      data => {
        this.favorites = data;
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this.onInIt();
  }


}
