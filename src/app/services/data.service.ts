import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // this comment added by basharkh9
  // since Angular 9 you can provided in 'root', 'any', 'platform'
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  // this method return an observable wich is lazy loaded and not the actual data,
  // hence you have to subscribe to it
  // store the subscribtion
  // and unsubscribe on destroying the component.
  getData() {
    return this.httpClient.get('assets/db.json');
  }
}
