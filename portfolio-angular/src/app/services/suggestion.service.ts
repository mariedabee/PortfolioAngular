import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comment {
  text: string;
  createdAt: Date;
}

export interface Suggestion {
  _id: string;
  suggestion: string;
  createdAt?: Date;
  likes?: number;
  comments?: Comment[]; // Array to hold comments related to the suggestion
  newComment?: string; // Property to hold the new comment being typed
}

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
    console.log('fetching suggestions ...');
    return this.http.get<any[]>(this.apiUrl);
  }
  // Method to add a comment to a specific suggestion
  addComment(suggestionId: string, comment: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${suggestionId}/comments`, {
      text: comment,
    });
  }

  // Method to like a specific suggestion
  likeSuggestion(suggestionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${suggestionId}/like`, {});
  }
}
