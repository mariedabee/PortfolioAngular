import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MentalHealthComponentComponent } from './mental-health/mental-health.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MentalHealthComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
}
