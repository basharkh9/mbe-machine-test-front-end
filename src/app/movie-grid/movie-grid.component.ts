import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css'],
})
export class MovieGridComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService, private router: Router) {}
  data: any = {};
  filteredMovies: any = [];
  selectedGenre: string = '';
  search: string = '';
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

    this.populateMovie();
  }

  private populateMovie() {
    if (this.selectedGenre)
      this.filteredMovies = this.data.movies.filter((m: any) =>
        m.genres.some((g: string) => g == this.selectedGenre)
      );
  }

  onSearchChange() {
    if (this.search == '') {
      this.filteredMovies = this.data.movies;
      this.populateMovie();
      return;
    }

    if (this.filteredMovies.length == 0) {
      this.filteredMovies = this.data.movies;
      this.populateMovie();
      return;
    }
    console.log(this.filteredMovies);
    this.selectedGenre == '' ? this.applyFilter(false) : this.applyFilter(true);
  }

  private applyFilter(selectedGenre: boolean) {
    let movieCollection = selectedGenre
      ? this.filteredMovies
      : this.data.movies;

    this.filteredMovies = movieCollection.filter((m: any) => {
      return m.title.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  navigateToMovieDetail(id: number) {
    this.router.navigate([`/detail/${id}`], {
      state: { movie: this.filteredMovies.find((m: any) => m.id == id) },
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
