import { Component } from '@angular/core';
import { SuggestionService } from '../../services/suggestion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

/**
 * Component for submitting suggestions via a form.
 * Allows users to enter and submit suggestions, and provides navigation to another page.
 */
@Component({
  selector: 'app-suggestion-box',
  standalone: true,
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class SuggestionBoxComponent {
  /**
   * Holds the current suggestion text entered by the user.
   */
  suggestion: string = '';

  /**
   * Creates an instance of SuggestionBoxComponent.
   * @param router - Used for programmatic navigation.
   * @param suggestionService - Service for handling suggestion submissions.
   */
  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  /**
   * Handles the form submission to send the suggestion.
   * Validates that the suggestion is not empty, then submits it using SuggestionService.
   * Resets the suggestion field after a successful submission.
   */
  onSubmit(): void {
    if (this.suggestion.trim()) {
      this.suggestionService.submitSuggestion(this.suggestion).subscribe({
        next: (response) => {
          console.log('Suggestion submitted:', response);
          this.suggestion = ''; // Clear the input field on success
        },
        error: (error) => {
          console.error('Error submitting suggestion:', error);
          // Handle error (e.g., show an error message to the user)
        },
      });
    }
  }

  /**
   * Navigates to another component or page.
   */
  navigateToAnotherComponent(): void {
    this.router.navigate(['/suggestions-page']);
  }
}
