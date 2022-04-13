import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  busqueda: string = '';
  resultados: any = [];

  constructor(private ServiceMovies: MoviesService, private route: Router) {}

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
      this.resultados = response;
      //Crea otro array donde le pasa los datos del Objeto response para que sean accesibles desde el html
      //en el ngfor, porque response seria el array a tratar pero no está declarado en el javascript y no es accesible.
    });
  }

  detalle(id: string) {
    //alert(id);
    // para pasarle al router una ruta con un id para navegar, si solo fuera el path podria usar routerlink;
    this.route.navigate(['details/', id]);
  }
}
