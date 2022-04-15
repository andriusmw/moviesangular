import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seriessearch',
  templateUrl: './seriessearch.component.html',
  styleUrls: ['./seriessearch.component.css'],
})
export class SeriessearchComponent implements OnInit {
  busqueda2: string = '';
  resultados2: any = [];

  constructor(private ServiceMovies: MoviesService, private route: Router) {}

  ngOnInit(): void {}

  seriesbuscar() {
    console.log('Pasa por buscar()');
    console.log('contenido de busqueda: ' + this.busqueda2);
    console.log('contenido de url: ' + this.ServiceMovies.SeriesUrl);

    this.ServiceMovies.SeriesgetQuery(this.busqueda2).subscribe((response2) => {
      /*'{this.busqueda}'*/
      console.log(response2);

      /*arreglado, si ponía ALGO MÁS en el console log, en vez de
      mostrar el array correctamente me ponia el texto que le habia dicho y el array no salia, se ve que no se puede "sumar" a nada */
      this.resultados2 = response2;
      //Crea otro array donde le pasa los datos del Objeto response para que sean accesibles desde el html
      //en el ngfor, porque response seria el array a tratar pero no está declarado en el javascript y no es accesible.
    });
  }

  seriesdetalle(id: string) {
    //alert(id);
    // para pasarle al router una ruta con un id para navegar, si solo fuera el path podria usar routerlink;
    this.route.navigate(['seriesdetails/', id]);
  }
}
