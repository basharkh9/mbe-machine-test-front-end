import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { CardComponent } from './shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [{ path: '', component: MovieGridComponent }];

@NgModule({
  declarations: [AppComponent, MovieGridComponent, CardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
