import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url =
    'https://api.themoviedb.org/3/search/movie?api_key=bdddb1edc98dc169584e175d1ee3c2d1&query=';

  /*url =
    ' https://api.themoviedb.org/3/search/movie?api_key=bdddb1edc98dc169584e175d1ee3c2d1&query=harry';

    El endpoint es correcto, si lo pongo en el navegador me devuelve un chorro de datos y un array de peliculas
    que empiezan o coinciden con la búqueda harry, me falla por otro motivo desconocido por ahora.
    */

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = '{this.url}{query}';
    //Agrega nuevos parámetros a la url que para interactuar con los endpoints de la API

    return this.http.get(url);
  }
}
