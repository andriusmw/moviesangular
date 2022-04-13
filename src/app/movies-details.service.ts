import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesDetailsService {
  UrlDetails1 = 'https://api.themoviedb.org/3/movie/';
  // {movie_id}
  UrlDetails2 = '?api_key=bdddb1edc98dc169584e175d1ee3c2d1&language=en-US';
  //Lleva la api-key ya puesta

  /*url =  'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'  -->Estructura del endopint de la API para detalle
                  https://api.themoviedb.org/3/movie/671?api_key=bdddb1edc98dc169584e175d1ee3c2d1&language=en-US'
   EL MOVIE ID de una peli de harry potter es el 671 -^
   ;

    El endpoint es correcto, si lo pongo en el navegador me devuelve un chorro de datos.

    */

  constructor(private http: HttpClient) {}

  getQueryDetails(movieID: string) {
    const UrlDetailsF = this.UrlDetails1 + movieID + this.UrlDetails2;
    //concateno la URI junto con el movieID que he recibido porque la API tiene esa estructura.
    console.log(
      'url completa= ' + this.UrlDetails1 + movieID + this.UrlDetails2
      //Muestro la URI/URL que voy a atacar en el lado del servidor/API
    );
    return this.http.get(UrlDetailsF);
  }
}
