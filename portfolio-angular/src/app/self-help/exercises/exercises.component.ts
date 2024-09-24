import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslationModule } from '../../translation.module';

/**
 * Component for displaying a list of exercises.
 * Fetches exercises from a service and displays them in the component's template.
 */
@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TranslationModule],
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent implements OnInit {
  /**
   * Array to hold the list of exercises fetched from the service.
   */
  exercises: any[] = [];

  /**
   * Creates an instance of ExercisesComponent.
   * @param exerciseService - Service to fetch exercise data.
   */
  constructor(
    private exerciseService: ExerciseService,
    private translate: TranslateService) {
       const newLang = this.translate.getBrowserLang() || 'en';
       this.translate.use(newLang);
    }

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Fetches the list of exercises from the ExerciseService and assigns it to the exercises array.
   */
  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }
    
    this.exerciseService.getExercises().subscribe({
      next: (data) => {
        this.exercises = data; // Assign fetched exercises to the component's property
      },
      error: (error) => {
        console.error('Error fetching exercises:', error); // Handle error (e.g., show an error message)
      },
    });
  }
}
