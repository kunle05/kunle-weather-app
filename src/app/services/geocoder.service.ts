import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LatLng } from '../utils/latLng';

@Injectable({
  providedIn: 'root',
})
export class GeocoderService {
  geocoder = new google.maps.Geocoder();

  constructor() {}

  getLatLng(request: google.maps.GeocoderRequest): Observable<LatLng> {
    return new Observable((subscriber) => {
      this.geocoder.geocode(request, (result) => {
        console.log(result);
        let res = {
          lat: result[0].geometry.location.lat(),
          lng: result[0].geometry.location.lng(),
        };
        subscriber.next(res);
      });
    });
  }
}
