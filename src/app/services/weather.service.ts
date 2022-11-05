import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url =
    'https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit&timezone=auto&current_weather=true';
  private hourly = 'apparent_temperature,weathercode';
  private daily = 'apparent_temperature_min,apparent_temperature_max';

  constructor(private _http: HttpClient) {}

  getWeather(lat: number, lng: number): Observable<any> {
    let url = `${this.url}&latitude=${lat}&longitude=${lng}&hourly=${this.hourly}&daily=${this.daily}`;
    return this._http.get(url);
  }
}
