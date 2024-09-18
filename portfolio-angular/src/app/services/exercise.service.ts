// src/app/services/exercise.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service for managing exercise-related data.
 * Provides methods to fetch exercises from a local JSON file.
 */
@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private jsonUrl = 'assets/exercises.json'; // Path to your JSON file containing exercise data

  constructor(private http: HttpClient) {}

  /**
   * Fetches the list of exercises from the local JSON file.
   * @returns An Observable that emits the data from the JSON file.
   */
  getExercises(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
