import { Component } from '@angular/core';
import { LatLng } from './utils/latLng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kunle-weather-app';
  location?: LatLng;
  temperature?: number;

  setLocation(data: LatLng): void {
    this.location = data;
  }

  setTemp(temp: number): void {
    this.temperature = temp;
  }
}
