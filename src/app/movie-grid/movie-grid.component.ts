import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGenre } from '../models/genre.model';
import { IMovie } from '../models/movie.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css'],
})
export class MovieGridComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}
  data: { genres: IGenre[]; movies: IMovie[] } = {
    genres: [],
    movies: [],
  };
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.dataService.getData().subscribe({
      next: (d) => {
        this.data = d as any;
      },
      complete: () => console.log(this.data),
      error: (e) => {
        console.error(e);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
