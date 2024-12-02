import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslationModule } from '../../translation.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * Component for displaying book recommendations.
 * Fetches book data from a service and displays them in the component's template.
 */
@Component({
    selector: 'app-book-recommendations',
    imports: [HttpClientModule, TranslationModule, CommonModule],
    templateUrl: './book-recommendations.component.html',
    styleUrls: ['./book-recommendations.component.scss']
})
export class BookRecommendationsComponent implements OnInit {
  books: any[] = []; // Array to hold book recommendations

  constructor(private translate: TranslateService, private http: HttpClient) {
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

  ngOnInit() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }

    this.fetchBooks().subscribe({
      next: (data) => {
        this.books = data; // Assign fetched books to the component's property
      },
      error: (error) => {
        console.error('Error fetching books:', error); // Handle error (e.g., show an error message)
      },
    });
  }

  // Fetch book recommendations from the JSON file
  fetchBooks(): Observable<any[]> {
    return this.http.get<any[]>('assets/bookRecommendations.json'); // Adjust path as necessary
  }
}
