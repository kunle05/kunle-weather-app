import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { GeocoderService } from '../services/geocoder.service';
import { LocationService } from '../services/location.service';
import { FIELDSETS } from '../utils/fieldsets';
import { LatLng } from '../utils/latLng';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  loading: boolean = false;
  fieldsets = FIELDSETS;
  @Output() latLngEmitter: EventEmitter<LatLng> = new EventEmitter();

  constructor(
    private _locationService: LocationService,
    private _geocoder: GeocoderService
  ) {}

  ngOnInit(): void {}

  onChange(e: MatSelectChange, val: string): void {
    switch (val) {
      case 'Continent':
        this.continentSelected(e);
        break;
      case 'Country':
        this.countrySelected(e);
        break;
      case 'State':
        this.stateSelected(e);
        break;
      default:
        this.citySelected(e);
    }
  }

  continentSelected(e: MatSelectChange): void {
    this.loading = true;
    this._locationService.getCountryList(e.value).subscribe((data) => {
      this.fieldsets[1].value = data;
      this.loading = !this.loading;
    });
  }

  countrySelected(e: MatSelectChange): void {
    this.loading = true;
    this._locationService.getStateList(e.value).subscribe((data) => {
      this.fieldsets[2].value = data;
      this.loading = !this.loading;
    });
  }

  stateSelected(e: MatSelectChange): void {
    this.loading = true;
    this._locationService.getCityList(e.value).subscribe((data) => {
      this.fieldsets[3].value = data;
      this.loading = !this.loading;
    });
  }

  citySelected(e: MatSelectChange): void {
    this._geocoder.getLatLng({ address: e.value }).subscribe((data) => {
      this.latLngEmitter.emit(data);
    });
  }
}
