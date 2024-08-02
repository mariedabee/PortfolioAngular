import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiKey = 'a353a6edc3f84403a54c837bf67bf833'; 
  private apiUrl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private http: HttpClient) {}

  getLocation(latitude: number, longitude: number): Observable<any> {
    const url = `${this.apiUrl}?q=${latitude}+${longitude}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
