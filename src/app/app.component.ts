import { Component } from '@angular/core';

export class Weather {
  constructor() { }
  city!: String;
  description!: String;
  current_temperature!: Number;
  feels_like!: Number;
  wind_speed!: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
}
