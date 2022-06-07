import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css'],
})
export class MovieGridComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}
  data: any = {};
  filteredMovies: any = [];
  selectedGenre: string = '';
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.dataService.getData().subscribe({
      next: (d: any) => {
        this.data = d;
        this.filteredMovies = d.movies;
      },
      complete: () => console.log(this.data),
      error: (e) => {
        console.error(e);
      },
    });
  }

  onGenreChange() {
    if (this.selectedGenre == '') {
      this.filteredMovies = this.data.movies;
      return;
    }
    this.filteredMovies = this.data.movies.filter((m: any) =>
      m.genres.some((g: string) => g == this.selectedGenre)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
