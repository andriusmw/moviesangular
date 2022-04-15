import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SeriessearchComponent } from './seriessearch/seriessearch.component';
import { SeriesdetailsComponent } from './seriesdetails/seriesdetails.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, DetailsComponent, NavbarComponent, HomeComponent, SeriessearchComponent, SeriesdetailsComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
