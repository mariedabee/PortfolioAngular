import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Defines the structure of a mental health issue object with properties. 
 */
interface MentalHealthIssue {
  name: string;
  description: string;
  prevalence: string;
  keywords: string[];
}

/**
 * The Injectable decorator is used to mark the class as a service 
 * that can be injected.
 * @Injectable({ providedIn: 'root' }): Indicates that this service should 
 * be provided at the root level, making it a singleton service.
 */
@Injectable({
  providedIn: 'root',
})

/**
 * This service is responsible for fetching data from backend.
 * command to create it : ng generate service mental-health
 * */
export class MentalHealthService {
  private apiUrl = 'http://localhost:3000/mental-health';

  /**
   * Injects the HttpClient service for making HTTP requests.
   * The HttpClient service is used to make HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * @returns an observable stream of an array of MentalHealthIssue objects by making a GET request to the backend API.
   * The Observable type is used to handle asynchronous operations, such as HTTP requests.
   */
  getMentalHealthIssues(): Observable<MentalHealthIssue[]> {
    return this.http.get<MentalHealthIssue[]>(this.apiUrl);
  }
}
