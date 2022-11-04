import { Component } from '@angular/core';
import { LatLng } from './utils/latLng';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kunle-weather-app';
  latLng?: LatLng;

  setGeocode(data: LatLng): void {
    this.latLng = data;
    console.log(this.latLng);
  }
}
