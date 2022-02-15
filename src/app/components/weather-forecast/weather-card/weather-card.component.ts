import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/services/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() weather!: Weather

  constructor() { }

  ngOnInit(): void {
    
  }

}
