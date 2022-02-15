import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/services/interfaces/weather.interface';

@Component({
  selector: 'app-weather-hightlights',
  templateUrl: './weather-hightlights.component.html',
  styleUrls: ['./weather-hightlights.component.css']
})
export class WeatherHightlightsComponent implements OnInit {

  @Input() weather!: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
