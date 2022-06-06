import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('image-src') imageSrc = '';
  @Input('movie-title') movieTitle = '';
  @Input('movie-year') movieYear = '';
  constructor() {}

  ngOnInit(): void {}
}
