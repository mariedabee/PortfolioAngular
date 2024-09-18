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
/**
 * Service for handling suggestion-related operations.
 * Provides methods to submit suggestions, fetch existing suggestions, add comments,
 * and like suggestions.
 */
@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl = 'http://localhost:4000/api/suggestions';

  constructor(private http: HttpClient) {}

  /**
   * Submits a new suggestion to the server.
   * @param suggestion - The suggestion text to be submitted.
   * @returns An Observable that emits the server's response.
   */
  submitSuggestion(suggestion: string): Observable<any> {
    return this.http.post(this.apiUrl, { suggestion });
  }

  /**
   * Fetches all suggestions from the server.
   * @returns An Observable that emits an array of suggestions.
   */
  getSuggestions(): Observable<any> {
    console.log('fetching suggestions ...');
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Adds a comment to a specific suggestion.
   * @param suggestionId - The ID of the suggestion to comment on.
   * @param comment - The text of the comment to be added.
   * @returns An Observable that emits the server's response.
   */
  addComment(suggestionId: string, comment: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${suggestionId}/comments`, {
      text: comment,
    });
  }

  /**
   * Likes a specific suggestion.
   * @param suggestionId - The ID of the suggestion to like.
   * @returns An Observable that emits the server's response.
   */
  likeSuggestion(suggestionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${suggestionId}/like`, {});
  }
}
