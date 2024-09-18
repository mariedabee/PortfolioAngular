import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Component for displaying a search bar.
 * Emits the current search term whenever a search is triggered.
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  /**
   * EventEmitter that emits the search term whenever a search is triggered.
   */
  @Output() search = new EventEmitter<string>();

  /**
   * Holds the current search term entered by the user.
   */
  searchTerm: string = '';

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Emits the initial value of the search term.
   */
  ngOnInit() {
    this.onSearch(); // Emit the initial value when the component is initialized
  }

  /**
   * Emits the current search term to the parent component.
   * This method is typically called when the user triggers a search.
   */
  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
