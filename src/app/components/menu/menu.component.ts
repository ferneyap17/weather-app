import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { City } from 'src/app/services/interfaces/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() showMenuEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('menu') menu!: ElementRef<HTMLDivElement>;

  showMenu = false;
  cityToSearch = '';
  cities: City[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menu.nativeElement.classList.toggle('left-full');
  }

  searchCities(city: string): void {
    this.weatherService.getCitiesByName(city).subscribe({
      next: (res) => {
        this.cities = res;
      },
    });

  }

  obtainCityId(id: number): void {
    this.weatherService.eventSearch.next(id);
    this.toggleMenu();
  }
}
