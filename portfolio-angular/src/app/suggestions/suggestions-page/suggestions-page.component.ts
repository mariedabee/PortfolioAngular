import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  Suggestion,
  SuggestionService,
} from '../../services/suggestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggestions-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss'],
})
export class SuggestionsPageComponent {
  suggestions: Suggestion[] = [];

  constructor(private suggestionService: SuggestionService) {}
  ngOnInit(): void {
    this.fetchSuggestions();
  }

  fetchSuggestions(): void {
    this.suggestionService.getSuggestions().subscribe(
      (data) => {
        this.suggestions = data.map((suggestion: Suggestion) => ({
          ...suggestion,
          newComment: '', // Initialize the newComment property for each suggestion
        }));
        console.log('suggestions:' + JSON.stringify(this.suggestions));
      },
      (error) => {
        console.error('Error fetching suggestions', error);
      }
    );
  }
  addComment(suggestion: Suggestion, form: NgForm): void {
    if (suggestion.newComment && suggestion.newComment.trim()) {
      this.suggestionService
        .addComment(suggestion._id, suggestion.newComment)
        .subscribe(
          (updatedSuggestion) => {
            // Update the local copy of the suggestion with the new comment
            suggestion.comments = updatedSuggestion.comments;
            // Clear the newComment field for the current suggestion
            suggestion.newComment = '';
            form.resetForm(); // Reset the form to clear validation states
          },
          (error) => {
            console.error('Error adding comment:', error);
          }
        );
    }
  }

  likeSuggestion(suggestion: Suggestion): void {
    this.suggestionService.likeSuggestion(suggestion._id).subscribe(
      (updatedSuggestion) => {
        // Update the local copy of the suggestion with the new like count
        suggestion.likes = updatedSuggestion.likes;
      },
      (error) => {
        console.error('Error liking suggestion:', error);
      }
    );
  }
}
