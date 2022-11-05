import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LatLng } from '../utils/latLng';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  reducedFont: boolean = false;
  weather: any;
  @Input() location!: LatLng;
  @Input() position!: number;
  @Input() closeBtnEnabled!: boolean;
  @Output() widgetToRemove: EventEmitter<number> = new EventEmitter();
  @Output() temperature: EventEmitter<number> = new EventEmitter();

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    if (this.location.address.length > 13) {
      this.reducedFont = true;
    }
    this._weatherService
      .getWeather(this.location.lat, this.location.lng)
      .subscribe({
        next: (data) => {
          this.weather = data;
          this.temperature.emit(data.current_weather.temperature);
        },
        error: (err) => {
          this.weather = err;
        },
      });
  }

  closeCard(): void {
    this.widgetToRemove.emit(this.position);
  }
}
