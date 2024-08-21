import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { SuggestionService } from '../../services/suggestion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggestions-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule], 
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss'], 
})
export class SuggestionsPageComponent {
  suggestions: any[] = [];

  constructor(private suggestionService: SuggestionService) {}

  newComment: any;

  addComment(suggestion: any) {}

  ngOnInit(): void {
    this.fetchSuggestions();
  }

  fetchSuggestions(): void {
    this.suggestionService.getSuggestions().subscribe(
      (data) => {
        this.suggestions = data;
      },
      (error) => {
        console.error('Error fetching suggestions', error);
      }
    );
  }
}
