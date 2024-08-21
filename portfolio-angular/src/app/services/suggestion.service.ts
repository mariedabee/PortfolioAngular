import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl = 'http://localhost:4000/api/suggestions';

  constructor(private http: HttpClient) {}

  submitSuggestion(suggestion: string): Observable<any> {
    return this.http.post(this.apiUrl, { suggestion });
  }
  getSuggestions(): Observable<any> {
    console.log('fetching suggestions ...')
    return this.http.get<any[]>(this.apiUrl);
  }
}
