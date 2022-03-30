import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
  favoritesUser$:any;
  constructor(private _ApiService:ApiService) { 
   }

  ngOnInit(): void {
    this.favoritesUser$ = this._ApiService.getFavotitesUsers()
  }
}
