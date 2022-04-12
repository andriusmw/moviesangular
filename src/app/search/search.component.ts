import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';

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

    this.ServiceMovies.getQuery(this.busqueda).subscribe((response) => {
      /*'{this.busqueda}'*/
      console.log(response);
      /*arreglado, si ponía ALGO MÁS en el console log, en vez de
      mostrar el array correctamente me ponia el texto que le habia dicho y el array no salia, se ve que no se puede "sumar" a nada */
    });
  }
}
