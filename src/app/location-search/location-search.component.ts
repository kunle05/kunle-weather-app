import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeocoderService } from '../services/geocoder.service';
import { LatLng } from '../utils/latLng';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
})
export class LocationSearchComponent implements OnInit {
  inputValue: string = '';
  @Output() location: EventEmitter<LatLng> = new EventEmitter();

  constructor(private _geocoder: GeocoderService) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.inputValue != '') {
      this._geocoder
        .getLatLng({ address: this.inputValue })
        .subscribe((data) => {
          if (data.lat !== 0 && data.lng !== 0) {
            this.location.emit(data);
          }
          this.inputValue = '';
        });
    }
  }
}
