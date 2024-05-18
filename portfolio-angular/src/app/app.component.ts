import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MentalHealthComponentComponent } from './mental-health/mental-health.component';
import { MentalHealthService } from './mental-health.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MentalHealthComponentComponent],
  providers: [MentalHealthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mental-Health-app';
  mentalHealthIssues: any[] = [];

  constructor(private mentalHealthService: MentalHealthService) {}

  ngOnInit(): void {
    this.mentalHealthService.getMentalHealthIssues().subscribe((data) => {
      this.mentalHealthIssues = data;
    });
  }
}
