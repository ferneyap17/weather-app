import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, WeatherResponse } from './interfaces/weather.interface';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  eventSearch: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) {}

  public getCitiesByName(name: string): Observable<City[]> {
    return this.http.get<City[]>(`${environment.url}/location?city=${name}`);
  }

  public getWeatherByCity(id: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${environment.url}/weather/${id}`);
  }
}
