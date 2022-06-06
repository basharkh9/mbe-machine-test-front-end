import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
