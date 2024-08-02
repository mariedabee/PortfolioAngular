import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl = 'https://your-backend-api/suggestions'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  submitSuggestion(suggestion: string): Observable<any> {
    return this.http.post(this.apiUrl, { suggestion });
  }
}
