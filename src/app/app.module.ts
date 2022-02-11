import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherCardComponent } from './components/weather-forecast/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent,
    WeatherForecastComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
