import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  Suggestion,
  SuggestionService,
} from '../../services/suggestion.service';
import { CommonModule } from '@angular/common';

/**
 * Component for displaying and interacting with suggestions.
 * Allows users to view, comment on, and like suggestions.
 */
@Component({
  selector: 'app-suggestions-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss'],
})
export class SuggestionsPageComponent {
  /**
   * Array to hold the list of suggestions fetched from the SuggestionService.
   */
  suggestions: Suggestion[] = [];

  /**
   * Creates an instance of SuggestionsPageComponent.
   * @param suggestionService - Service for managing suggestions.
   */
  constructor(private suggestionService: SuggestionService) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Fetches the list of suggestions from the SuggestionService.
   */
  ngOnInit(): void {
    this.fetchSuggestions();
  }

  /**
   * Fetches the list of suggestions from the SuggestionService.
   * Initializes the newComment property for each suggestion.
   */
  fetchSuggestions(): void {
    this.suggestionService.getSuggestions().subscribe({
      next: (data) => {
        this.suggestions = data.map((suggestion: Suggestion) => ({
          ...suggestion,
          newComment: '', // Initialize the newComment property for each suggestion
        }));
        console.log('suggestions:', JSON.stringify(this.suggestions));
      },
      error: (error) => {
        console.error('Error fetching suggestions', error);
      },
    });
  }

  /**
   * Adds a comment to a specific suggestion.
   * Updates the local suggestion with the new comment and resets the form.
   * @param suggestion - The suggestion to which the comment will be added.
   * @param form - The NgForm instance used to manage the form state.
   */
  addComment(suggestion: Suggestion, form: NgForm): void {
    if (suggestion.newComment && suggestion.newComment.trim()) {
      this.suggestionService
        .addComment(suggestion._id, suggestion.newComment)
        .subscribe({
          next: (updatedSuggestion) => {
            // Update the local copy of the suggestion with the new comment
            suggestion.comments = updatedSuggestion.comments;
            // Clear the newComment field for the current suggestion
            suggestion.newComment = '';
            form.resetForm(); // Reset the form to clear validation states
          },
          error: (error) => {
            console.error('Error adding comment:', error);
          },
        });
    }
  }

  /**
   * Likes a specific suggestion.
   * Updates the local suggestion with the new like count.
   * @param suggestion - The suggestion to be liked.
   */
  likeSuggestion(suggestion: Suggestion): void {
    this.suggestionService.likeSuggestion(suggestion._id).subscribe({
      next: (updatedSuggestion) => {
        // Update the local copy of the suggestion with the new like count
        suggestion.likes = updatedSuggestion.likes;
      },
      error: (error) => {
        console.error('Error liking suggestion:', error);
      },
    });
  }
}
