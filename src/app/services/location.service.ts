import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private url = 'https://referential.p.rapidapi.com/v1';

  private options = {
    headers: {
      'X-RapidAPI-Key': environment.referentialKey,
      'X-RapidAPI-Host': 'referential.p.rapidapi.com',
    },
  };

  constructor(private _http: HttpClient) {}

  getCountryList(code: string): Observable<any> {
    let url = `${this.url}/country?fields=continent_code&continent_code=${code}&limit=250 `;
    return this._http.get(url, this.options);
  }

  getStateList(country: string): Observable<any> {
    let url = `${this.url}/state?fields=iso_a2&iso_a2=${country}&lang=en&limit=250`;
    return this._http.get(url, this.options);
  }

  getCityList(state: string): Observable<any> {
    let url = `${this.url}/city?fields=iso_a2%2Cstate_code%2Cstate_hasc&lang=en&state_code=${state}&limit=250`;
    return this._http.get(url, this.options);
  }
}
