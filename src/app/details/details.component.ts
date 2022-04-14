import { Component, OnInit } from '@angular/core';
import { MoviesDetailsService } from '../movies-details.service';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detail: any;

  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService,
    private DetailsService: MoviesDetailsService,
    private route: Router,
    private location: Location
  ) {
    this.router.params.subscribe((params) => {
      // alert(params['id']);
      this.DetailsService.getQueryDetails(params['id']).subscribe(
        (response) => {
          console.log(response);
          this.detail = response;
        }
      );
    });
  }

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  Alertar() {
    alert('Debes elegir un plan de subscripción para ver las películas');
  }
}
