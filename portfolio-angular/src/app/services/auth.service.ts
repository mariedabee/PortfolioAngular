import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Use the API URL from environment

  constructor(private http: HttpClient) {}

  // Sign-up method
  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/signup`, userData);
  }

  // Login method
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, credentials);
  }
}
