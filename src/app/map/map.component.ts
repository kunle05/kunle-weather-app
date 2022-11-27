import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { LatLng } from '../utils/latLng';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input()
  set temperature(temp: number) {
    if (this.viewLoaded) {
      this.marker.setLabel({
        text: this._number.transform(temp, '1.0-0')!,
        color: 'white',
        className: 'red',
      });
    }
  }

  @Input()
  set location(data: LatLng) {
    this.mapData = data;
    if (this.viewLoaded) {
      this.initMap();
    }
  }

  @ViewChild('map') mapElementDiv!: ElementRef;
  mapData!: LatLng;
  map!: google.maps.Map;
  marker!: google.maps.Marker;
  viewLoaded: boolean = false;

  constructor(private _number: DecimalPipe) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.viewLoaded = true;
    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(this.mapElementDiv.nativeElement, {
      center: { lat: this.mapData.lat, lng: this.mapData.lng },
      mapTypeControl: false,
    });

    if (this.mapData.result === 'current location') {
      this.map.setZoom(15);
    } else {
      this.map.fitBounds(this.mapData.result[0].geometry.bounds);
    }

    this.marker = new google.maps.Marker({
      map: this.map,
    });

    this.marker.setPosition({
      lat: this.mapData.lat,
      lng: this.mapData.lng,
    });
  }
}
