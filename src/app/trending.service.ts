import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  UrlTrending =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=bdddb1edc98dc169584e175d1ee3c2d1&query=harry';

  constructor(private http: HttpClient) {}

  getTrending() {
    //const url = this.UrlTrending + query;
    //Agrega nuevos parámetros a la url que para interactuar con los endpoints de la API
    console.log('url treding= ' + this.UrlTrending);
    return this.http.get(this.UrlTrending);
  }
}
