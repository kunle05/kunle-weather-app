import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
import { GeocoderService } from './services/geocoder.service';
import { LatLng } from './utils/latLng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kunle-weather-app';
  location?: LatLng;
  temperature?: number;
  locationError: boolean = false;

  constructor(private _geocoder: GeocoderService) {}

  ngOnInit(): void {
    if (navigator.geolocation) {
      this._geocoder
        .getUserLocation()
        .pipe(mergeMap((res: any) => this._geocoder.geocodeLatLng(res)))
        .subscribe({
          next: (data: any) => {
            this.location = data;
          },
          error: (error: any) => {
            console.log(error);
            this.locationError = true;
          },
        });
    } else {
      alert('Geolocation is not supported by this browser');
    }
  }

  setLocation(data: LatLng): void {
    this.location = data;
    this.locationError = false;
  }

  setTemp(temp: number): void {
    this.temperature = temp;
  }
}
