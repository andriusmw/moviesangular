import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url =
    'https://api.themoviedb.org/3/search/movie?api_key=bdddb1edc98dc169584e175d1ee3c2d1&query=';

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = '${this.url }${query}';
    //Agrega nuevos parámetros a la url que para interactuar con los endpoints de la API

    return this.http.get(url);
  }
}
