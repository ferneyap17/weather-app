import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hightlights-card',
  templateUrl: './hightlights-card.component.html',
  styleUrls: ['./hightlights-card.component.css']
})
export class HightlightsCardComponent implements OnInit {

  @Input() cardTitle = '';
  @Input() value!: number;
  @Input() unity = '';
  @Input() gps!: boolean;
  @Input() progress = false;
  @Input() wind = '';

  constructor() { }

  ngOnInit(): void {
  }

}
