import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service for retrieving location information from latitude and longitude coordinates.
 * Utilizes the OpenCage Data API to fetch geocoding information.
 */
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiKey = 'a353a6edc3f84403a54c837bf67bf833'; // OpenCage API key
  private apiUrl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private http: HttpClient) {}

  /**
   * Fetches location information based on latitude and longitude coordinates.
   * @param latitude - The latitude of the location.
   * @param longitude - The longitude of the location.
   * @returns An Observable that emits the location information from the API.
   */
  getLocation(latitude: number, longitude: number): Observable<any> {
    const url = `${this.apiUrl}?q=${latitude}+${longitude}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
