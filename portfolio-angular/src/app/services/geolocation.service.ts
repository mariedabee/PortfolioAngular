import { Injectable } from '@angular/core';

/**
 * Service to handle geolocation-related functionalities.
 * Provides methods to get the current position of the device.
 */
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  getPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }
}
