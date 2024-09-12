import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GeolocationService } from '../../services/geolocation.service';
import { LocationService } from '../../services/location.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-need-help',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss'],
})
export class NeedHelpComponent implements OnInit {
  constructor(private router: Router) {}

  location: string = '';
  hotlines: { [key: string]: string } = {
    US: '1-800-273-TALK (8255)',
    UK: '116 123',
    CA: '1-833-456-4566',
    DE: '0800 111 0 111', // Germany
    FR: '01 45 39 40 00', // France
    IT: '800 86 00 22', // Italy
    ES: '914 590 055', // Spain
    NL: '0900 0767', // Netherlands
    BE: '1813', // Belgium
  };
  hotline: string = '';

  // Use inject function to resolve dependencies in standalone components
  private geolocationService = inject(GeolocationService);
  private locationService = inject(LocationService);

  ngOnInit(): void {
    this.geolocationService.getPosition().then((pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      this.locationService
        .getLocation(latitude, longitude)
        .subscribe((data: any) => {
          this.location = data.results[0].components.country_code.toUpperCase();
          this.hotline =
            this.hotlines[this.location] ||
            'Please call your local emergency number.';
        });
    });
  }

  // Method to navigate programmatically to the book recommendations page
  goToBookRecommendations(): void {
    this.router.navigate(['/self-help-book-recommendation']);
  }

  // Method to navigate to self-help exercises
  goToSelfHelpExercises(): void {
    this.router.navigate(['/self-help-excercises']);
  }
}
