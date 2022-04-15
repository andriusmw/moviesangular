import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SeriessearchComponent } from './seriessearch/seriessearch.component';
import { SeriesdetailsComponent } from './seriesdetails/seriesdetails.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'search' }, --> Se cargaba el routing de vista detalle, mirar de ser menos restrictivo
  //{ path: '**', pathMatch: 'full', redirectTo: 'search' },
  //Cuando busca algo que no está en las rutas redireciona a search
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'seriessearch', component: SeriessearchComponent },
  //{ path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'seriesdetails/:id', component: SeriesdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
