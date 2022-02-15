import { Component, Input, OnChanges } from '@angular/core';
import { Weather } from 'src/app/services/interfaces/weather.interface';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnChanges {

  @Input() weathers!: Weather[];

  constructor() { }

  ngOnChanges(changes: any): void {
    this.weathers = changes.weathers.currentValue.slice(1, this.weathers.length);
  }

}
