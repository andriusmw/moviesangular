import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  busqueda: string = '';

  constructor(private ServiceMovies: MoviesService) {}

  ngOnInit(): void {}

  buscar() {
    console.log('Pasa por buscar()');
    console.log('contenido de busqueda: ' + this.busqueda);
    console.log('contenido de url: ' + this.ServiceMovies.url);
    this.ServiceMovies.getQuery('{this.busqueda}').subscribe((response) => {
      console.log('la respuesta es: ' + response);
    });
  }
}
