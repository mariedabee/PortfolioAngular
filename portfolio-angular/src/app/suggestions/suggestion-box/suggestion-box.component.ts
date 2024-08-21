import { Component } from '@angular/core';
import { SuggestionService } from '../../services/suggestion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-suggestion-box',
  standalone: true,
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class SuggestionBoxComponent {
  suggestion: string = '';

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  onSubmit() {
    if (this.suggestion.trim()) {
      this.suggestionService.submitSuggestion(this.suggestion).subscribe(
        (response) => {
          console.log('Suggestion submitted:', response);
          this.suggestion = '';
        },
        (error) => {
          console.error('Error submitting suggestion:', error);
        }
      );
    }
  }

  navigateToAnotherComponent() {
    this.router.navigate(['/suggestions-page']);
  }
}
