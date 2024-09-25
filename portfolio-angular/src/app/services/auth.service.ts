import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/signup'; // Your Node.js API endpoint

  constructor(private http: HttpClient) {}

  // Method to handle sign-up
  signUp(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
