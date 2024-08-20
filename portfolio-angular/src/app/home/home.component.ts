import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { MentalHealthCardComponent } from "./mental-health-card/mental-health-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SearchBarComponent, MentalHealthCardComponent, CommonModule], // Import standalone components here
  standalone: true, // This line tells Angular that this component is standalone
})
export class HomeComponent {
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