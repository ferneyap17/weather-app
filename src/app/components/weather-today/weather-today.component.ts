import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Weather,
} from 'src/app/services/interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css'],
})
export class WeatherTodayComponent implements OnInit, AfterViewInit {
  public clima!: Weather;

  @ViewChild(MenuComponent) menu!: MenuComponent;

  @Input() todayWeather!: Weather;
  @Input() city!: string;

  constructor(private weatherService: WeatherService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menu.toggleMenu();
  }

  getCurrentWeather(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }
}
