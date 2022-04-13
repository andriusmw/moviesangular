import { Component, OnInit } from '@angular/core';
import { MoviesDetailsService } from '../movies-details.service';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService,
    private DetailsService: MoviesDetailsService
  ) {
    this.router.params.subscribe((params) => {
      alert(params['id']);
      this.DetailsService.getQueryDetails(params['id']).subscribe(
        (response) => {
          console.log(response);
        }
      );
    });
  }

  ngOnInit(): void {}
}
