import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [AppComponent, MovieGridComponent, CardComponent],
  imports: [BrowserModule],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
