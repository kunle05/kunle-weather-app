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
        let res;
        if (result) {
          res = {
            address: request.address!,
            lat: result[0].geometry.location.lat(),
            lng: result[0].geometry.location.lng(),
            result: result,
          };
        } else {
          res = {
            address: request.address!,
            lat: 0,
            lng: 0,
          };
        }
        subscriber.next(res);
      });
    });
  }

  getUserLocation(): Observable<any> {
    return new Observable((subscriber) => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          subscriber.next(pos);
        },
        (error: any) => {
          subscriber.error(error);
        }
      );
    });
  }

  geocodeLatLng(latlng: any): Observable<LatLng> {
    return new Observable((subscriber) => {
      this.geocoder.geocode({ location: latlng }, (result) => {
        let address = '';

        for (let i = 0; i < result[0].address_components.length; i++) {
          if (result[0].address_components[i].types.includes('political')) {
            address = result[0].address_components[i].long_name;
            break;
          }
        }

        let res = {
          address: address,
          lat: latlng.lat,
          lng: latlng.lng,
          result: 'current location',
        };
        subscriber.next(res);
      });
    });
  }
}
