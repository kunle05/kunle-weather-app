import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { LatLng } from '../utils/latLng';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  locationList: LatLng[] = [];
  btnActivated: boolean = false;
  @Output() temperature: EventEmitter<number> = new EventEmitter();
  @Input()
  set location(data: LatLng) {
    this.locationList.push(data);
    this.validateBtn();
  }

  constructor() {}

  ngOnInit(): void {}

  removeWidget(pos: number): void {
    if (this.locationList.length > 1) {
      this.locationList.splice(pos, 1);
      this.validateBtn();
    }
  }

  setTemp(temp: number): void {
    this.temperature.emit(temp);
  }

  validateBtn(): void {
    this.btnActivated = this.locationList.length > 1 ? true : false;
  }
}
