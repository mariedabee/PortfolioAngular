import { Injectable } from '@angular/core';
/**
 * Service to handle geolocation-related functionalities.
 * Provides methods to get the current position of the device.
 */
@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  
  /**
   * Gets the current position of the device.
   * Utilizes the browser's Geolocation API to retrieve the position.
   * @returns A Promise that resolves with the GeolocationPosition object if successful,
   *          or rejects with a GeolocationPositionError if there's an error.
   */
  getPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }
}
