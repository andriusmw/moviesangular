import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'search' },
  //{ path: '**', pathMatch: 'full', redirectTo: 'search' },
  //Cuando busca algo que no está en las rutas redireciona a search
  { path: 'search', component: SearchComponent },
  //{ path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
