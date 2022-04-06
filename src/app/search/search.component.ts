import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  busqueda: string | undefined;

  constructor(private ServiceMovies: MoviesService) {}

  ngOnInit(): void {}

  buscar() {
    console.log('Pasa por buscar()');
    this.ServiceMovies.getQuery('&query=&{this.busqueda}').subscribe(
      (response) => {
        console.log('la respuesta es: ' + response);
      }
    );
  }
}
