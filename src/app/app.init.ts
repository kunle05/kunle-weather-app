import { GeocoderService } from './services/geocoder.service';

export function appUserLocationFactory(_geocoder: GeocoderService) {
  return () => _geocoder.getUserLocation();
}
