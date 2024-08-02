import { Component } from '@angular/core';
import { SuggestionService } from '../services/suggestion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-suggestion-box',
  standalone: true,
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class SuggestionBoxComponent {
  suggestion: string = '';

  constructor(private suggestionService: SuggestionService) {}

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
}
