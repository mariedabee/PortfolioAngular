import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MentalHealthComponentComponent } from './mental-health/mental-health.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    MentalHealthComponentComponent,
    SearchBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mental-Health-app';
  mentalHealthIssues: any[] = [];

  constructor(private http: HttpClient) {}

  performSearch(term: string) {
    this.http
      .get<any[]>(`http://localhost:4000/api/mental-illnesses?search=${term}`)
      .subscribe(
        (data) => {
          this.mentalHealthIssues = data;
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
  }
}
