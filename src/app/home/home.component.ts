import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  resultados: any = [];

  constructor(private Trending: TrendingService, private route: Router) {}

  ngOnInit(): void {
    this.Trending.getTrending().subscribe((response) => {
      /*'{this.busqueda}'*/
      console.log(response);

      /*arreglado, si ponía ALGO MÁS en el console log, en vez de
      mostrar el array correctamente me ponia el texto que le habia dicho y el array no salia, se ve que no se puede "sumar" a nada */
      this.resultados = response;
    });
  }

  detalle(id: string) {
    //alert(id);
    // para pasarle al router una ruta con un id para navegar, si solo fuera el path podria usar routerlink;
    this.route.navigate(['details/', id]);
  }
}
