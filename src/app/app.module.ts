import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherCardComponent } from './components/weather-forecast/weather-card/weather-card.component';
import { WeatherHightlightsComponent } from './components/weather-hightlights/weather-hightlights.component';
import { HightlightsCardComponent } from './components/weather-hightlights/hightlights-card/hightlights-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent,
    WeatherForecastComponent,
    WeatherCardComponent,
    WeatherHightlightsComponent,
    HightlightsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
