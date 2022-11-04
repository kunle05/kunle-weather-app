import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LatLng } from '../utils/latLng';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  // map = google.maps.Map;

  @Input() latLng!: LatLng;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService
      .getWeather(this.latLng.lat, this.latLng.lng)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
