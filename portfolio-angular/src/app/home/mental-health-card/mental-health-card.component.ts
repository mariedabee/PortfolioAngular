import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mental-health-card',
    imports: [],
    templateUrl: './mental-health-card.component.html',
    styleUrl: './mental-health-card.component.scss'
})
export class MentalHealthCardComponent {
  @Input() mentalHealthIssue:
    | {
        name: string;
        description: string;
        prevalence: string;
        keywords: string[];
      }
    | undefined;

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
