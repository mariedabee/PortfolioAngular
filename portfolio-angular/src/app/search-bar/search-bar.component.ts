import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from '../translation.module';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component for displaying a search bar.
 * Emits the current search term whenever a search is triggered.
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslationModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private translate: TranslateService) {
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

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
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }
  }

  /**
   * Emits the current search term to the parent component.
   * This method is typically called when the user triggers a search.
   */
  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
