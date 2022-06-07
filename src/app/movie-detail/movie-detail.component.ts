import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  imageSrc = '';
  movieTitle = '';
  movieYear = '';
  movieActors = '';
  moviePlot = '';
  state: any = {};
  constructor(private router: Router) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
    if (this.state) {
      this.imageSrc = this.state.movie.posterUrl;
      this.movieTitle = this.state.movie.title;
      this.movieYear = this.state.movie.year;
      this.movieActors = this.state.movie.actors;
      this.moviePlot = this.state.movie.plot;
    } else {
      router.navigate(['']);
    }
  }

  ngOnInit(): void {}
}
