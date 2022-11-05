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
  isLoading: boolean = false;
  fieldsets = FIELDSETS;
  selectedValue: string = '';
  @Output() location: EventEmitter<LatLng> = new EventEmitter();

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
    this.isLoading = true;
    this.selectedValue = e.value.val;
    this._locationService.getCountryList(e.value.key).subscribe((data) => {
      this.fieldsets[1].value = data;
      this.isLoading = !this.isLoading;
    });
  }

  countrySelected(e: MatSelectChange): void {
    this.isLoading = true;
    this.selectedValue = e.value.val;
    this._locationService.getStateList(e.value.key).subscribe({
      next: (data) => {
        this.fieldsets[2].value = data;
        this.isLoading = !this.isLoading;
      },
      error: () => {
        this.isLoading = !this.isLoading;
        this.selectedValue = '';
      },
    });
  }

  stateSelected(e: MatSelectChange): void {
    this.isLoading = true;
    this.selectedValue = e.value.val;
    this._locationService.getCityList(e.value.key).subscribe({
      next: (data) => {
        this.fieldsets[3].value = data;
        this.isLoading = !this.isLoading;
      },
      error: () => {
        this.isLoading = !this.isLoading;
        this.selectedValue = '';
      },
    });
  }

  citySelected(e: MatSelectChange): void {
    this.selectedValue = e.value.val;
    this.submit();
  }

  submit(): void {
    this._geocoder
      .getLatLng({ address: this.selectedValue })
      .subscribe((data) => {
        if (data.lat !== 0 && data.lng !== 0) {
          this.location.emit(data);
          this.selectedValue = '';
        }
      });
  }
}
