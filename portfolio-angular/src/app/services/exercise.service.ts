// src/app/services/exercise.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private jsonUrl = 'assets/exercises.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  // Method to fetch exercises from the local JSON file
  getExercises(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
