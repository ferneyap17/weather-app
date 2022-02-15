import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs';
import { WeatherResponse } from './services/interfaces/weather.interface';
import { WeatherService } from './services/weather.service';

const DEFAULT_CITY = 368148;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  public weather!: WeatherResponse;
  public loader = true;
  public subscription!: Subscription;

  constructor(private weatherService: WeatherService) {
    this.getWeather(DEFAULT_CITY);
  }

  ngOnInit(): void {
    this.subscription = this.weatherService.eventSearch.subscribe(res => {
      this.loader = true;
      this.getWeather(res);
    });
  }

  getWeather(id: number): void {
    this.weatherService
      .getWeatherByCity(id)
      .pipe(
        tap((res) => {
          this.weather = res;
          console.log(this.weather);

          this.loader = false;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
